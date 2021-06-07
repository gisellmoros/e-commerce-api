/*
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');
const {createAccessToken} = require('../auth.js');


module.exports.createOrder = (req,res) => {

if(req.user.isAdmin === true) {
			res.send({auth:"You are not authorized to perform this action."})

		} else {

				let newOrder = new Order ({

					productId: req.body.productId,
					quantity: req.body.quantity,
					price: req.body.price
				})

				newOrder.save()
				.then(newOrder => {
					res.send(newOrder)
				})
				.catch(error => {
					res.send(error)
				})		
			}

}
*/










