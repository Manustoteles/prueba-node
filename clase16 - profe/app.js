const express = require('express');
const path = require('path')

const app = express()

const publicPath = path.join(__dirname,'public')

app.use(express.static(publicPath))

app.get('/', (req,res)=>{
    let homePath = path.join(__dirname,'views','home.html')
    res.sendFile(homePath)
    //res.send(`Hola este es el home de nuestra app`)
})

app.get('/milanesa', (req,res)=>{
    let plato = 'Sandwich de milanesa'
    res.send(plato)
})

app.get('/consola', (req,res)=>{
    let mensaje = 'hola estoy en la ruta consola'
    console.log(mensaje)
    res.send(mensaje)
})



const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta corriendo en Http://Localhost:${port}`)
})


