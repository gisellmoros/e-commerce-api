const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcrypt');
const {createAccessToken} = require('../auth.js')

module.exports.register = (req,res) => {

	const hashedPw = bcrypt.hashSync(req.body.password,10);

	const emailChecker = User.find({email: req.body.email})
	
	if(emailChecker === req.body.email) return res.send({message:"Email already exists."});
	if(req.body.password.length < 8) return res.send({message:"Password too short."});
	if(req.body.password !== req.body.confirmPassword) return res.send({message:"Password do not match."});

	let newUser = new User ({

		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		mobileNo: req.body.mobileNo,
		email: req.body.email,
		password: hashedPw
		
	})

	newUser.save()
	.then(newUser => {
		res.send(newUser)
	})
	.catch(error => {
		res.send(error)
	})

};

module.exports.login = (req,res) => {

	User.findOne({email: req.body.email})
	.then(foundUser => {
		if(foundUser === null) {
			res.send(false) 
		} else {
			const isPasswordCorrect = bcrypt.compareSync(req.body.password,foundUser.password)
		
			if(isPasswordCorrect){
				
				res.send({accessToken: createAccessToken(foundUser)})
			
			} else {
				res.send(false)
			}
		}
	})
	.catch(error => {
		res.send(error)
	})
};

module.exports.updateAdmin = (req,res) => {

	let updateUser = {
			isAdmin: true
	}
	User.findByIdAndUpdate(req.params.id,updateUser,{new:true})
	.then(updateUser => {
		res.send(updateUser)
	})
	.catch(error => {
		res.send(error)
	})
};




