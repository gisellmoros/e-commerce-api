const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

		productId: {
				type: String,
				required: [true,"Product Id is required."]
			},
		quantity: {
				type: Number,
				required: [true,"Total quantity is required."],
				min: 0
			},
		price: {
				type: Number,
				required: [true,"Total price is required."],
				min: 0
			},
		purchasedOn: {
				type: Date,
				default: new Date()
			}
});


module.exports = mongoose.model('Order',OrderSchema);