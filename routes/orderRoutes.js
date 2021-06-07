const express = require('express')
const router = express.Router()
const {createOrder} = require('../controllers/orderControllers');
const {verify} = require('../auth')


router.put('/',verify,createOrder);



module.exports = router;

