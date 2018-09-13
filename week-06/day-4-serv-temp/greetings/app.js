'use strict';

const express = require('express');
const app = express();
const PORT = 3002;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {     // views-on belüli home.ejs
    title: 'Home page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  res.render('home', {
    title: 'Products page',
    header: req.params.id,
    // params = : 
    withGoodBye: req.query.withGoodBye === 'true',
    // query = ?
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})
