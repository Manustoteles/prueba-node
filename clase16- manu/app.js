const express = require('express')

const path = require('path')

const app = express()

const publicPath =path.join(__dirname,'public')

app.use(express.static(publicPath))

const direccionBase = path.join(__dirname,'views')

let port = 3030

app.get('/babbage',(req,res) => {
    let babbagePath = path.join(direccionBase,'babbage.html')
    res.sendFile(babbagePath)
})

app.get('/berners-lee',(req,res) => {
    let barnersPath = path.join(direccionBase,'berners-lee.html')
    res.sendFile(barnersPath)
})

app.get('/',(req,res) =>{
    let homePath = path.join(direccionBase,'index.html')
    res.sendFile(homePath)
})

app.listen(port, ()=>{
    console.log(`El puerto que estamos escuchando es el Http://Localhost:${port}`)
} )

