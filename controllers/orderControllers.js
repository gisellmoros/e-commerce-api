const User = require('../models/User');
const Product = require('../models/Product');
const {createAccessToken} = require('../auth.js')

module.exports.createOrder = (req, res) => {
	if (req.user.isAdmin === true) {
		res.send({ auth: 'You are not authorized to perform this action.' });
	} else {
		User.findById(req.user.id)
		
			.then(foundUser => {

				foundUser.orders.push(req.body);

				return foundUser.save();
			})
			.then((user) => {

				return res.send(user.orders);

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

