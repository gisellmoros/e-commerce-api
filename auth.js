const jwt = require("jsonwebtoken");
const secret = "EcommerceAPI";

module.exports.createAccessToken = (user) => {

	const data = {
		id: user._id,
		username: user.username,
		email: user.email,
		isAdmin: user.isAdmin
	}

	return jwt.sign(data,secret,{})
};


module.exports.verify = (req,res,next) => {

let token = req.headers.authorization
	if(typeof token === "undefined") {

		res.send({auth:"You are not authorized to perform this action."})
	} else {

		token = token.slice(7,token.length)

		jwt.verify(token,secret,function(error,decoded){

			if(error) {
				res.send({auth:"Unable to recognized token."})
			} else {
				console.log(decoded)
			
				req.user = decoded
				
				next()
			}

		})

	}
};

module.exports.verifyAdmin = (req,res,next) => {

	if(req.user.isAdmin){
		next()
	} else {
		res.send({auth: "failed"})
	}

};