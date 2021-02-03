const express = require('express')
const app = express();
const port = 3080;
bodyParser = require("body-parser");
const db = require('./database')

app.use(bodyParser.json());

app.get('/api/note/:id', function(req, res){
  console.log('Get request: ' + req.params.id)
  let NoteModel  = require('./note');
  let id = req.params.id;
  NoteModel
    .findById(id)
    .then(doc => {
      if (doc) {
        res.json({ noteText: doc.noteText });
      }
     })
    .catch(err => {
      console.log("There was an error when looking up that id.");
      res.json({ valid: false, noteText: '' })
     })
});

app.post('/api/note', (req, res) => {
  console.log('Post request')
  let NoteModel  = require('./note')
  let note = new NoteModel({ noteText: req.body.note })
  note.save()
   .then(doc => {
      console.log('New note was inserted with ObjectID: ' + doc.id);
      res.json(doc.id);
     })
   .catch(err => { console.error(err); })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
