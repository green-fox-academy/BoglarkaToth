'use strict';
// import express:
const express = require('express');
// = const app = require('express')(); =>
// => app.use... miatt KELL az express !!!

// Do not forget to load the path module - const path = require('path');
const path = require('path');
// use express:
const app = express();
// configure your app to listen on a port:
const PORT = 8080;
// If you check your browser console you see some error messages, like: frontend.js:1 Failed to load resource: the server responded with a status of 404 (Not Found) - This is because we forgot to set how and from where should express serve our static files.
// Add serving static assets to serve your assets folder:
app.use('/assets', express.static('assets'));
// postman_body_json:
app.use(express.json());
//handle GET requests to the / endpoint, and return something
// ?
app.get('/', (req, res) => {
  // render the static index.html instead of just returning a basic text:
  res.sendFile(path.join(__dirname, 'index.html'));
  // változtatás nélkül visszaküldjük a böngészőnek a html fált
});

app.get('/doubling', (req, res) => {
  let inputQuery = parseInt(req.query.input);
  // parseInt = string => number
  if (inputQuery) {
    res.json({
      "received": inputQuery,
      "result": inputQuery * 2
    })
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  let greeterName = req.query.name;
  let greterTitle = req.query.title
  if (greeterName && greterTitle) {
    res.json({
      name: greeterName,
      title: greterTitle,
      welcome_message: `Oh, hi there ${greeterName}, my dear ${greterTitle}!`
    })
  } else if (!greeterName) {
    res.json({
      error: "Please provide a name!"
    })
  }
})

app.get('/appenda/:appendable', (req, res) => {
  let appendableParams = req.params.appendable;
  if (appendableParams) {
    res.json({
      appended: `${appendableParams}a`,
    })
  } else {
    res.status(404).json({
      error: `no appendable`,
    })
  }
})

// -----------------------------------------------------------

function sumAction(n) {
  if (n <= 0) {
    return 0;
  } else {
    return (n + sumAction(n - 1));
  };
}

function factorAction(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    factorAction(n - 1);
    return n * factorAction(n - 1);
  }
}

app.post('/dountil/:action', (req, res) => {
  // => :action => params-ból szedi =>
  let actionParam = req.params.action;        // stringet vár
  if (actionParam === "sum") {
    let result = sumAction(req.body.until);     // body == postman_body_json => innen veszi be az értékeket/adatokat
    res.json({
      result
    })
  } else if (actionParam === "factor") {
    let result = factorAction(req.body.until);    // body == postman_body_json
    res.json({
      result
    })
  } else {
    res.json({
      error: "Please provide a number!"
    })
  }
})

// ----------------------------------------------

function sumWhat(arrayN) {
  const sumResult = arrayN.reduce((elem, current) => {
    elem + current;
  })
  return sumResult;
}
function multiplyWhat(arrayN) {
  const multiplyResult = arrayN.reduce((elem, current) => {
   elem + current;
  })
  return multiplyResult;
}
function doubleWhat(arrayN) {
  const newArr = arrayN.map(elem => {
    elem * 2;
  })
  return newArr;
}

app.post('/arrays', (req, res) => {
  // => nem kell mögé :what => body-ból szedi ki =>
  let toDo = req.body.what;    // body == postman_body_json
  console.log(toDo);
  let numbersArr = req.body.numbers;    // body == postman_body_json
  console.log(numbersArr);
  if (toDo === "sum") {
    let result = sumWhat(numbersArr);
    res.json({
      result,
      numbers: numbersArr // numbers => postman_body-ból jön
    })
  } else if (toDo === "multiply") {
    let result = multiplyWhat(numbersArr);
    res.json({
      result,
      numbers: numbersArr

    })
  } else if (toDo === "double") {
    let result = doubleWhat(numbersArr);
    res.json({
      result,
      numbers: numbersArr
    })
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    })
  }
})




app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
