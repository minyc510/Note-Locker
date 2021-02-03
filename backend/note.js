let mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({ 
    noteText: String
 });

module.exports = mongoose.model('Note', noteSchema);