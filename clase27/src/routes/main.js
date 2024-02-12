// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// lh:3000/
router.get('/', mainController.index); 
// lh:3000/search
router.get('/search', mainController.search); 

module.exports = router;
