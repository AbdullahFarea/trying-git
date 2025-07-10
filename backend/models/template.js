const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
  name: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Template', TemplateSchema);
