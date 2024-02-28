const express = require('express');
const router = express.Router();

// requiero express validator con las propiedades
const { check } = require('express-validator')

// defino lo que quiero validar

let validarDeIndex = [
    check('name').notEmpty().withMessage('Debe ingresar el nombre'),
    check('colors').notEmpty().withMessage('debe ingresar los colores'),
    check('email')
    .notEmpty().withMessage('el mail no puede estar vacio').bail()
    .isEmail().withMessage('Debe incluir un mail valido'),
    check('age').isNumeric().withMessage('tiene que ingresar un valor numerico')
]

const mainController = require('../controllers/mainController')
const routeMiddleware = require('../middlewares/adminControl')

router.get('/', mainController.index)
router.post('/update', validarDeIndex ,mainController.indexUpdate)
router.get('/mensaje', mainController.mensajes)


module.exports = router
