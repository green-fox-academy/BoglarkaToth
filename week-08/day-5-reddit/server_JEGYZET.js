'use strict';

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();  // ezzel "use-olom" az express-t
// const cors = require('cors');

// app.use(cors());
app.use('/assets', express.static('assets')); // a static fájlokat így húzom be.. = middleware
// req.body hívásához kell (app.post-ban):
app.use(bodyParser.json());
// sima /-nél küldd el => 
// __dirname-ből => (= adott mappa = day-4-5-redd)
// csak az index.html fájl-t a frontend-re
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/modify', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/modify.html'));
});

// mysql-be lép be = createConnection:
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mYsql123',
  // command line-ban lekérdezem mik vannak:
  database: 'reddit'
});

// => mysq ENTER = connect
// teszteli. h tud kapcsolódni, akkor továbbmegy
conn.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/posts', (req, res) => {
  // azért kell a SELECT, különben nincs mit visszaadni
  conn.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      res.json({
        posts: result
      });
    }
  })
});

app.post('/posts', (req, res) => {
  // nem az url-ből jön az adat (params v query), hanem a body-ból = a felhasználótól kért adat(pl 'submit' gomb)
  // belarakom egy változóba, mert még használni akarom..
  let data = req.body;
  // előbb létrehozom, aztán visszaüldöm =>
  // ISNERT = beillesztés, hozzáadás, létrehozás
  // (azért kel a SELECT előbb, különben nincs mit leSELECTálni..)
  conn.query('INSERT INTO posts (title, url, timestamp, score) VALUES (?, ?, ?, ?)', [data.title, data.url, 1494138425, 0], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      // mivel INSERT nem ad result-ot => result1 != "INSERT INTO posts (title, ur..." 
      // result1 helyett: 
      // SELECt ad result-ot:
      conn.query('SELECT * FROM posts WHERE title=?', [data.title], (err2, result2) => {
        if (err2) {
          console.log(err2);
          res.status(500).json({
            message: 'An unexpected error happened'
          })
        } else {
          res.json(result2);
        }
      })
    }
  })
});

app.put('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  // (azért kell előbb SELECT-álni, kölünben nincs mit UPDATE-elni)
  conn.query('SELECT * FROM posts WHERE id=?', [id], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      // JSON.stringify => e nélkül RowDataPacket []-be pakol a SELECT ...  de mi ez?:)
      // console.log(JSON.stringify(result1));
      // VAGY: Bence 8/2
      // const { blur, change, focus, select } = event.target.elements; menőzés
      // obj = {
      //   blur: blur.value,
      //   change: change.value,
      //   focus: focus.value,
      //   select: select.value,
      // }


      // result1 []-t ad vissza => result1[0]
      // nekem csak a score kell, ezért beteszem egy változóba => .score
      // előbb megnövelem, után rakom egy változóba => ++  (ha a válzotóban növelem meg, akkor nem működik.. ?)
      result1[0].score++;
      let score = result1[0].score;
      conn.query('UPDATE posts SET score = ? WHERE id = ?', [score, id], (err2, result2) => {
        if (err2) {
          console.log(err2);
          res.status(500).json({
            message: 'An unexpected error happened'
          })
        } else {
          // mivel UPDATE nem ad result-ot => result2 != "UPDATE posts SET scor..." 
          // result2 helyett: 
          // lehetne még egy SELECT, de egyszer már le van kérdezve, úh nem kell másik. DE =>
          // => az eső SELECT az UPDATE előtt van, tehát az a nem UPDATE-elt eredményt tárolja =>
          // => a result1[0].score++ megnövel egyel a result1 csore értékét, viszont ez ne az adatbázisban növel, ezért kell az UPDATE
          // és így már az resut1 a megnövelt értéket tárolja, amit már vissza lehet itt adni:
          res.json(result1);
        }
      })
    }
  })
});

app.put('/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  conn.query('SELECT * FROM posts WHERE id=?', [id], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      result1[0].score--;
      let score = result1[0].score;
      conn.query('UPDATE posts SET score = ? WHERE id = ?', [score, id], (err2, result2) => {
        if (err2) {
          console.log(err2);
        } else {
          res.json(result1);
        }
      })
    }
  })
});

app.delete('/posts/:id', (req, res) => {
  let deleteId = req.params.id;
  // (csak azért kell SELECT, mert a feladat kéri vissza, h mit DELETE-elek, de e nélkül is lehet DELETE-elni:)
  conn.query('SELECT * FROM posts WHERE id=?', [deleteId], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      conn.query('DELETE FROM posts WHERE id = ?', [deleteId], (err2, result2) => {
        if (err2) {
          console.log(err2);
        } else {
          res.json(result1);
        }
      })
    }
  })
});

app.put('/posts/:id', (req, res) => {
  // url-ből az id:
  let dataPut = req.params.id;
  // bodyból a 'submit':
  let data = req.body;
  conn.query('SELECT * FROM posts WHERE id = ?', [dataPut], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      conn.query('UPDATE posts SET title = ?, url = ? WHERE id = ?', [data.title, data.url, dataPut], (err2, result2) => {
        if (err2) {
          console.log(err2);
        } else {
          // (lehetne egy 2. SELECT => res.json(result3); VAGY: )
          // mivel UPDATE előtt result1 = [{
          //    "id": 3,
          //    "title": "Crockford",
          //    "url": "http://9gag.com",
          //    "timestamp": 1494138425,
          //    "score": 1
          // }]
          result1[0].title = data.title;
          result1[0].url = data.url;
          // itt már result1 = [{
          //    "id": 3,
          //    "title": "modified title",
          //    "url": "http://facebook.com",
          //    "timestamp": 1494138425,
          //    "score": 1
          // }]
          res.json(result1);
        }
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
