const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  books: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book'
  }],
  lastAccessed: { type: Date, default: Date.now },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
