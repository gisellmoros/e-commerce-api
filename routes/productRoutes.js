const express = require('express')
const router = express.Router()
const {verify,verifyAdmin} = require('../auth')

const {	createProduct,
		allActiveProducts,
		getSingleProduct,
		updateProductDetails} = require('../controllers/productControllers')

//Create Product
router.post('/',verify,verifyAdmin,createProduct);

//Retrieve all active products
router.get('/',allActiveProducts);

//Retrieve single product
router.get('/:id',getSingleProduct);

//Update product details
router.put('/:id',verify,verifyAdmin,updateProductDetails);

module.exports = router;