const express   = require('express')
const app       = express()
require('dotenv').config()
const hostname  = process.env.HOSTNAME || "localhost"
const port      = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send('hello world!')
})





app.listen(port, hostname, () => console.log(`APP STARTED : ${hostname}:${port}`))
