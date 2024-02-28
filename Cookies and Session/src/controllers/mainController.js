// requerir express-validator para poder validar
const { validationResult } = require('express-validator')
const session = require('express-session')

const mainController = {
    index: (req,res) => {
        res.render('index')
    },
    indexUpdate : (req,res) =>{
        let errors = validationResult(req);
        console.log(errors.mapped())

        if (errors.isEmpty()){
            const indexToUpdate = {
                name : req.body.name,
                colors : req.body.colors,
                email : req.body.email,
                age : req.body.age,
    
    
            }
           
            console.log(indexToUpdate)
            req.session.colorDeFondo = req.body.colors
            req.session.nombreDeUsuario = req.body.name
            res.render('index', { indexToUpdate })
        }else {
            res.render('index', { errors:errors.mapped(), old:req.body})
        }
        
    },
    mensajes: (req,res) => {
        datos = {
             usuario : req.session.nombreDeUsuario,
             color : req.session.colorDeFondo
        }
        console.log(datos)
        res.render('indexMssg', { datos })
    }
}

module.exports = mainController;