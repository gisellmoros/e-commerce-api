const User = require('../models/User');
const Product = require('../models/Product');
const {createAccessToken} = require('../auth.js')

module.exports.createOrder = (req, res) => {
	if (req.user.isAdmin === true) {
		res.send({ auth: 'You are not authorized to perform this action.' });
	} else {
		User.findById(req.user.id)
			.then(foundUser => {
				
				const foundProduct = {
					productId: '123456789', //from req.body array actually
					price: 500,
				};

				const reqBodyQuantity = 4; //from req.body array

				let subTotal = foundProduct.price * reqBodyQuantity;
				let totalAmount = subTotal; //since isang product/item lang.

				const newOrder = {
					totalAmount: totalAmount,
					items: [
						{
							productId: foundProduct.productId,
							quantity: reqBodyQuantity,
							price: foundProduct.price,
							subTotal: subTotal,
						},
					],
				};

				foundUser.orders.push(newOrder);

				return foundUser.save();
			})
			.then(user => {
				res.send(user.orders);
			})
			.catch(error => {
				res.send(error);
			});
	}
};

module.exports.getUserOrders = (req,res) => {

	User.findById(req.user.id)
	.then(user => {
		res.send(user.orders)
	})
	.catch(error => {
		res.send(error)
	})
};


module.exports.retrieveOrders = (req,res) => {

	User.find()
	.then((foundOrders) => {
		res.send(foundOrders.orders)
	})
	.catch(error => {
		res.send(error)
	})
}

