const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const crypto = require('crypto');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		productoId = req.params.id

		productoSeleccionado = products.find((product) => product.id == productoId)
		console.log('este es el product id' + productoId)
		console.log(productoSeleccionado)
		res.render('detail', { productoSeleccionado })
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const newProduct = {
			id: crypto.randomUUID(),
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description ,
			image: 'default-image.png'
		   }
		
		products.push(newProduct)  
		
		//sobreescribo el arhcivo
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))

		res.redirect('/products')
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;