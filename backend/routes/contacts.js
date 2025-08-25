const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const authMiddleware = (req,res,next)=>{ if(!req.session.userId) return res.sendStatus(401); next(); }

router.get('/', authMiddleware, async (req,res)=>{
  const contacts = await Contact.find({ user: req.session.userId });
  res.json(contacts);
});

router.post('/', authMiddleware, async (req,res)=>{
  const { name, phone } = req.body;
  const contact = await Contact.create({ name, phone, user: req.session.userId });
  res.json(contact);
});

module.exports = router;
