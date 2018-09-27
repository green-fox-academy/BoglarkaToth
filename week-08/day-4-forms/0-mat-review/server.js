const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(bodyParser.json());

app.use(cors());

const PORT = 3000;

app.post('/api/postElements', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
