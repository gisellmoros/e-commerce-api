const express = require('express')
const router = express.Router()
const {verify,verifyAdmin} = require('../auth')

const {createOrder,getUserOrders,retrieveOrders} = require('../controllers/orderControllers')

//Place an order
router.post('/',verify,createOrder);

router.get('/getOrder',verify,getUserOrders);

//router.get('/',verify,verifyAdmin,retrieveOrders);



module.exports = router;