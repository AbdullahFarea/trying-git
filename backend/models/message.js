const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  to: String,
  content: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
