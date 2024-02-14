const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = require('../data/productsDataBase.json');
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
		productoId = req.params.id

		productoSeleccionado = products.find((product) => product.id == productoId)
		console.log('este es el product id del edit' + productoId)
		console.log(productoSeleccionado)
		res.render('product-edit-form', { productoSeleccionado })
		
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic // capturamos la informacion 
		const { name, price, discount, category, description } = req.body;
		const { id } = req.params;

		//recorrer un array de objetos y donde encontremos un obj == id,params 
		products.forEach(product => {
			if(product.id == id){
				product.name = name;
				product.price = price;
				product.discount = discount;
				product.category = category;
				product.description = description;

			} 
			//sobreescribmos el archivo
			fs.writeFileSync(
				path.join(__dirname, '../data/productsDataBase.json'),
				JSON.stringify(products, null, 4), 
				{encoding: 'utf-8'}
			)

		})

		res.redirect('/')
		
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		const { id } = req.params

		 products = products.filter(product => product.id != id)

		fs.writeFileSync(
			path.join(__dirname, '../data/productsDataBase.json'),
			JSON.stringify(products, null, 4), 
			{encoding: 'utf-8'}
		)

		res.redirect('/products')

	}
};

module.exports = controller;