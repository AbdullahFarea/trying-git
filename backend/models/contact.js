const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Contact', ContactSchema);
