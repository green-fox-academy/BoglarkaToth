'use strict';

const express = require('express');
const app = express();
const PORT = 3002;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = 'Guest';
  if (req.query.name == undefined) {
    res.render('home', {
      title: 'Name page',
      name: name
    });
  } else {
    res.render('home', {
      title: 'Name page',
      name: req.query.name
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
