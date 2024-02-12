const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const products = require('../data/productsDataBase.json') // JSON -> JS

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const visitedProducts = products.filter((product) => product.category === 'visited');
		const inSaleProductos = products.filter((product) => product.category === 'in-sale');

		res.render('index', { productosVisitados : visitedProducts,
			inSaleProductos : inSaleProductos })
	},
	search: (req, res) => {
		// Do the magic
		//caputrar la informacion de queryParams
		const busqueda = req.query.keywords;

		
		//extraer los productos que macheen con la vista52.56 minutos video
		const productoBuscado = products.filter((product) => product.name.toLowerCase().
		includes(busqueda.toLowerCase()))

		
		//vista
		res.render('results', { productoBuscado, busqueda })
	},
};

module.exports = controller;
