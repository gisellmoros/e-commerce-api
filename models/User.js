
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
			totalAmount: {
				type: Number,
				required: true,
			},
			purchasedOn: {
				type: Date,
				default: new Date(),
			},
			items: [
				{
					productId: {
						type: String,
						required: [true, 'Product Id is required.'],
					},
					quantity: {
						type: Number,
						required: true,
					},
					price: {
						type: Number,
						required: true,
					},
					subTotal: {
						type: Number,
						required: true,
					},
				},
			],
		},
	],
});

module.exports = mongoose.model('User',UserSchema);