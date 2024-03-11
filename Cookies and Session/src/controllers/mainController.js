// requerir express-validator para poder validar
const { validationResult } = require('express-validator')
const session = require('express-session');
const { on } = require('../app');

const mainController = {
    index: (req,res) => {
        let colorDeFondo = req.cookies.colorDeFondo
        console.log(colorDeFondo)
        res.render('index', { colorDeFondo })
    },
    indexUpdate : (req,res) =>{
        let errors = validationResult(req);
        
       

        if (errors.isEmpty()){
            const indexToUpdate = {
                name : req.body.name,
                colors : req.body.colors,
                email : req.body.email,
                age : req.body.age,
    
    
            }
           if(req.body.colorDefault == 'on'){
            res.cookie('colorDeFondo', req.body.colors)
            
           } 
            
            let colorDeFondo = req.cookies.colorDeFondo

            req.session.colorDeFondo = req.body.colors
            req.session.nombreDeUsuario = req.body.name
            res.render('index', { indexToUpdate, colorDeFondo })

        }else {
            res.render('index', { errors:errors.mapped(), old:req.body ,colorDeFondo})
        }
        
    },
    mensajes: (req,res) => {
        datos = {
             usuario : req.session.nombreDeUsuario,
             color : req.session.colorDeFondo
        }
        console.log(datos)
        res.render('indexMssg', { datos })
    },  
    deleteCookie: (req,res) => {
       
        let colorDeFondo = res.cookies(colorDeFondo,'', { expires: new Date(0) })
        console.log(colorDeFondo)
        res.render('index', { colorDeFondo })
    },
}

module.exports = mainController;