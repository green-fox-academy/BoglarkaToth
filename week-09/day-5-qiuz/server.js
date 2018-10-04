'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const assets = express.static('assets');
const mysql = require('mysql');
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);
app.use(assets);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/modify', (req, res) => {
//   res.sendFile(path.join(__dirname, './assets/modify.html'));
// });

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mYsql123',
  database: 'quiz'
});

conn.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connection established');
});

let questionsNumbers = 10; // később változtatni változóra a bejövő plusz kérdések miatt..
app.get('/game', (req, res) => {
  let randomNumber = Math.ceil(Math.random() * questionsNumbers); // 10(qiestionN)-ig random változtat
  conn.query(`SELECT questions.id, question_id, answer, is_correct, question FROM answers INNER JOIN questions ON answers.question_id = questions.id where questions.id=${randomNumber};`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      res.json({
        game: result
      });
    }
  })
});

app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
      res.json({
        questions: result
      });
    }
  })
});

app.post('/questions', (req, res) => {
  let data = req.body;
  conn.query('INSERT INTO questions (question) VALUES (?)', [data.question], (err1, result1) => {
    if (err1) {
      console.log(err1);
      res.status(500).json({
        message: 'An unexpected error happened'
      })
    } else {
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



app.delete('/posts/:id', (req, res) => {
  let deleteId = req.params.id;
  // (csak azért kell SELECT, mert a feladat kéri vissza a result-ot, h mit DELETE-elek, de e nélkül is lehet DELETE-elni: )
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



app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
