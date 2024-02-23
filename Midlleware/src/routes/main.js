const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')
const routeMiddleware = require('../middlewares/adminControl')

router.get('/', mainController.index)
router.get('/admin', routeMiddleware.controlAdmin ,mainController.adminControl)


module.exports = router
