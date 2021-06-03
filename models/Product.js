const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

	name: {
		type: String,
		required:[true, "Please enter a product name."]
	},
	description: {
		type: String,
		required:[true, "Please enter the product description."]
	},
	price: {
		type: Number,
		required:[true, "Please enter the product price."]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	userList: [{
		userId: [{
			type: String,
		}],
		createdOn: {
			type: Date,
			default: new Date()
		}
	}]

});

module.exports = mongoose.model('Product',ProductSchema);