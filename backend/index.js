const express = require('express')
const app = express();
const port = 3080;
bodyParser = require("body-parser");

// Mock DB
const Notes = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello !')
});

app.get('/api/notes', (req, res) => {
  console.log('Get Request: api/notes');
  res.json(Notes);
});

app.post('/api/note', (req, res) => {
  console.log('Post Request: api/note');
  console.log(req.body.note);
  console.log('--------------');
  Notes.push(req.body.note);
  res.json('Post successful');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
