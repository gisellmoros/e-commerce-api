const express = require('express');
const router = express.Router();
const {verify,verifyAdmin} = require('../auth')

const {	register,
		login,
		updateAdmin,
		createOrder,
		getUserOrders,
		retrieveOrders} = require('../controllers/userControllers');


router.get('/getOrder',verify,getUserOrders);

router.get('/',verify,verifyAdmin,retrieveOrders);

//Registration
router.post('/',register);

//Login
router.post('/login',login);

//Place an order
router.post('/checkout',verify,createOrder);


//Update user as Admin
router.put('/:id',verify,verifyAdmin,updateAdmin);


module.exports = router