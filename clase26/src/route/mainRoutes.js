const express = require('express')

const router = express.Router()

const mainControllers = require('../controllers/mainControllers')
const e = require('express')

router.get('/', mainControllers.index)

router.get('/detalleMenu/:id', mainControllers.detail)



module.exports = router