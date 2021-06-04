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
	orders: [
		{
			productId: {
				type: String,
				required: [true,"Product Id is required."]
			},
			/*totalQuantity: {
				type: Number,
				required: true
			},
			totalPrice: {
				type: Number,
				required: true
			},*/
			purchasedOn: {
				type: Date,
				default: new Date()
			}
		}
	]
});

module.exports = mongoose.model('User',UserSchema);
