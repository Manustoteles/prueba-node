const express = require('express')
const app = express()
const path =require('path')
const port = 3000

const rute = path.join(__dirname,'..','public')
app.use(express.static(rute))

// Indicamos el motor de plantilla
app.set("view engine",  "ejs");
//Direccionamos a las vistas
app.set('views', path.join(__dirname, 'views/'));

const mainRoutes = require('./route/mainRoutes')

app.use('/',mainRoutes)

app.use('/detalleMenu',mainRoutes)



app.listen(port, ()=> {
    console.log(`Nuestra app corre en http://localhost:${port}`)
})