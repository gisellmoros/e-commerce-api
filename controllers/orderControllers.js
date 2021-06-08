const User = require('../models/User');
const Product = require('../models/Product');
const {createAccessToken} = require('../auth.js')

module.exports.createOrder = (req, res) => {
	if (req.user.isAdmin === true) {
		res.send({ auth: 'You are not authorized to perform this action.' });
	} else {
		User.findById(req.user.id)
			.then(foundUser => {

				const foundProductData = req.body;

				const productIds = foundProductData.map(item => {
					return item.productId;

				});

				//console.log(productIds)

				const quantities = foundProductData.map(item => {
					return item.quantity;

				});

				const newOrder = {
					totalAmount: 0,
					items: [],
				};

				let totalAmount = 0;

				foundProductData.forEach(item => {

					Product.findById(item.productId)
					.then(product => {
					//console.log("quantity: ",item.quantity,product.name)
					const subTotal = item.quantity * product.price
					totalAmount += subTotal
					const orderedProduct = {
						productId: product._id,
						quantity: item.quantity,
						price: product.price,
						subTotal: subTotal
					}
					newOrder.totalAmount = totalAmount
					newOrder.items.push(orderedProduct)
					console.log(newOrder.items.length)
						//console.log(totalAmount)
						//console.log(subTotal)
					if(foundProductData.length === newOrder.items.length) {

						foundUser.orders.push(newOrder);

						foundUser.save();
						 return res.send(newOrder)
						}
					})

				})				
				//console.log("success")
			})
			.catch(error => {
				console.log(error.message)
				res.send(error.message);
			});
		}
	};

module.exports.getUserOrders = (req,res) => {

	User.findById(req.user.id)
	.then(user => {
		res.send(user.orders)
	})
	.catch(error => {
		res.send(error.message)
	})
};


module.exports.retrieveOrders = (req,res) => {
	const allOrders = []

	User.find()
	.then(users => {
		
		//console.log(users[0].orders)

		users.forEach(user => {

			if(user.orders.length) {

				console.log(user.orders)
				allOrders.push({
					name: `${user.firstName} ${user.lastName}`,
					orderDetails: user.orders
				})
			}	
		})

	})
	.then(()=> {
		res.send(allOrders)
	})
	.catch(error => {
		res.send(error.message)
	})
}

