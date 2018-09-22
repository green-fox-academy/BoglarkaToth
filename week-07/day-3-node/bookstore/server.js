'use strict';

// Konfiguráció=>
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
// terminál telepítések...

app.use(cors());
// assets mappából használja a megfelelő fájlokat, amik abbban a mappban vannak:
app.use('/assets', express.static('assets'));

// erre "/" a kérésre küldi vissa a klinesnek a HTML fájlt
// (get = általános adakérés)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

// mysql-be lép be = createConnection:
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mYsql123',
  // command line-ban lekérdezem mik vannak:
  database: 'bookstore'
});

// => mysq ENTER = connect
conn.connect(function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connection established');
});

// api-json ..? ez mit csinál?
app.get('/api/books', (req, res) => {
  // beadom a mysql-nek a parancsot:
  conn.query('SELECT book_name FROM book_mast', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result)
    }
  })
})




app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
