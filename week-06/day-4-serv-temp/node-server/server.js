const express = require('express');
const path = require('path'); // kiváltom:  __dirname + '/index.html' // NEM + ozunk !!
const app = express();
const PORT = 3000;

// HTTP metódusok: 
// https://hu.wikipedia.org/wiki/HTTP

app.use('/assets', express.static('assets'))
// melyik mappában _ végpont-hol kell elkezdeni keresni
// assest statikus fájlokat tartalmaz

app.get('/', (req, res) => {    // sima /re is küldünk vmit
  //  res.sendFile(__dirname + '/index.html');    // NEM + ozunk !! :
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/ping', (req, res) => {
  // végpont neve _ function(req, res)
  res.json({
    message: 'pong',
  });
});


app.listen(PORT, () => {
  // melyik porton üzemel a serverünk = PORt száma _
  console.log(`The server is up and running on port ${PORT}`);
});

