 require('dotenv').config({path:'config.env'})
 const express = require('express')
const app = express()

const router = require('./route/route.js')

/* app.use(express.json()) */
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use('/', router) // point d'entree

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`serveur demarré http://localhost:${PORT}`);
})