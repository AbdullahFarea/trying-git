const express   = require('express')
const app       = express()
const session   = require('express-session')
require('dotenv').config()
const hostname  = process.env.HOSTNAME || "localhost"
const port      = process.env.PORT || 3000

app.use(session({
    secret: process.env.SECRET ,
    saveUninitialized: false,
    resave: false
}))

app.get('/', (req, res) => {
    res.send('Hello, ' + req.session.userName)
})

app.get('/name/:name', (req, res) => {
    req.session.userName = req.params.name
    res.send(req.session.userName)
})




app.listen(port, hostname, () => console.log(`APP STARTED : ${hostname}:${port}`))
