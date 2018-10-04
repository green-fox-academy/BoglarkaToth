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
  database: 'reddit'
});

conn.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connection established');
});





app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
