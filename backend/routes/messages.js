const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const Template = require('../models/template');
const authMiddleware = (req,res,next)=>{ if(!req.session.userId) return res.sendStatus(401); next(); }
const axios = require('axios');

async function sendWhatsApp(to,text){
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;
  await axios.post(url,{
    messaging_product:'whatsapp',
    to,
    type:'text',
    text:{ body:text }
  },{headers:{'Authorization':`Bearer ${token}`}});
}

router.post('/send', authMiddleware, async (req,res)=>{
  const { to, templateId, variables } = req.body;
  const template = await Template.findOne({ _id: templateId, user: req.session.userId });
  if(!template) return res.sendStatus(404);
  let content = template.content;
  for(const key in variables){
    content = content.replace(`{{${key}}}`, variables[key]);
  }
  await sendWhatsApp(to, content);
  const msg = await Message.create({ to, content, template: template._id, user: req.session.userId });
  res.json(msg);
});

router.get('/', authMiddleware, async (req,res)=>{
  const msgs = await Message.find({ user: req.session.userId }).populate('template');
  res.json(msgs);
});

module.exports = router;
