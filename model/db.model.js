const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
