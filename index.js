const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db.js')
const port = 3000

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(port,() => {
    console.log(`Servidor rodando na porta : ${port}`)
})
