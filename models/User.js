const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({

	firstName: {
		type: String,
		required: [true,"Please enter your first name."]
	},
	lastName: {
		type: String,
		required: [true,"Please enter your last name."]
	},
	mobileNo: {
		type: String,
		required: [true,"Please enter your mobile number."]
	},
	email: {
		type: String,
		required: [true,"Please enter your email address."]
	},
	password: {
		type: String,
		required: [true,"Please enter your password."]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	order: [{
		productId: [{
			type: String
		}],
		orderQuantity: {
			type: Number,
		},
		totalAmount: {
			type: Number,
		},
		purchasedOn: {
			type: Date,
			default: new Date()
		}
	}]
});

module.exports = mongoose.model('User',UserSchema);
