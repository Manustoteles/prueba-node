const express = require('express')
const app = express()
const path =require('path')
const port = 3000

const rute = path.join(__dirname,'..','public')
app.use(express.static(rute))

const mainRoutes = require('./route/mainRoutes')

app.use('/',mainRoutes)


app.listen(port, ()=> {
    console.log('estamos corriendo')
})