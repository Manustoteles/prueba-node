//rquires
const express = require('express');
const app=express();
const path =require('path')

const port  = 3005;

//config
const rute = path.join(__dirname,'public')

app.use(express.static(rute))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','register.html'))
})

app.listen(port, () => {
    console.log(`Nuestra app corre en http://localhost:${port}`)
})


