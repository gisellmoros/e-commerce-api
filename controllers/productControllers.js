const Product = require('../models/Product');
const {createAccessToken} = require('../auth.js');

module.exports.createProduct = (req,res) => {

	let newProduct = new Product({

		name: req.body.name,
		description: req.body.description,
		price: req.body.price

	})

	newProduct.save()
	.then(newProduct => {
		res.send(newProduct)
	})
	.catch(error => {
		res.send(error)
	})
};

module.exports.allActiveProducts = (req,res) => {

	Product.find({isActive: true})
	.then(foundProducts => {
		res.send(foundProducts)
	})
	.catch(error => {
		res.send(error)
	})
};

module.exports.getSingleProduct = (req,res) => {

	Product.findById(req.params.id)
	.then(product => {
		res.send(product)
	})
	.catch(error => {
		res.send(error)
	})
};

module.exports.updateProductDetails = (req,res) => {

	let updatedProduct = {

		name: req.body.name,
		description: req.body.description,
		price: req.body.price

	}

	Product.findByIdAndUpdate(req.params.id,updatedProduct,{new:true})
	.then(updatedProduct => {
		res.send(updatedProduct)
	})
	.catch(error => {
		res.send(error)
	})
};