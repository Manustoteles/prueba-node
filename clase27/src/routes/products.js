// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
// URL: lh:3000/productos
router.get('/', productsController.index); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/create', productsController.store); 



/*** EDIT ONE PRODUCT ***/ 
//router.???('/:id/???', productsController.edit); 
//router.???('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
//router.???('/:id', productsController.destroy); 


module.exports = router;
