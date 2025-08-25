const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });
  res.json({ id: user._id, email: user.email });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send('Invalid credentials');
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).send('Invalid credentials');
  req.session.userId = user._id;
  res.json({ message: 'logged in' });
});

module.exports = router;
