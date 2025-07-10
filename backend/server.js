const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const templateRoutes = require('./routes/templates');
const messageRoutes = require('./routes/messages');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/whatsapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(session({
  secret: process.env.SECRET || 'secret',
  saveUninitialized: false,
  resave: false,
}));

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
  res.send('WhatsApp Platform API');
});

app.listen(port, () => console.log('Server started on port', port));
