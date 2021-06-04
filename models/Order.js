const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

		productId: {
				type: String,
				required: [true,"Product Id is required."]
			},
		totalQuantity: {
				type: Number,
				required: [true,"Total amount is required."]
			},
		totalPrice: {
				type: Number,
				required: [true,"Total amount is required."]
			},
		purchasedOn: {
				type: Date,
				default: new Date()
			}
});

module.exports = mongoose.model('Order',OrderSchema);