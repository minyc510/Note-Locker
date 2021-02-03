const mongoose = require('mongoose');
const PRIVATE = require('./private');

class Database {
  constructor() { this._connect() }

  _connect() {
    console.log('Attempting to connect to the database...');

    mongoose.connect(PRIVATE.DB_URI, { useNewUrlParser: true })
      .then(() => { console.log('Database connection successful') })
      .catch(err => { console.error(err) })
    }
  }

module.exports = new Database()