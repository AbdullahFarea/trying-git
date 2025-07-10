const express = require('express');
const router = express.Router();
const Template = require('../models/template');
const authMiddleware = (req,res,next)=>{ if(!req.session.userId) return res.sendStatus(401); next(); }

router.get('/', authMiddleware, async (req,res)=>{
  const templates = await Template.find({ user: req.session.userId });
  res.json(templates);
});

router.post('/', authMiddleware, async (req,res)=>{
  const { name, content } = req.body;
  const template = await Template.create({ name, content, user: req.session.userId });
  res.json(template);
});

module.exports = router;
