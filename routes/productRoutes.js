const express = require('express')
const router = express.Router()
const {verify,verifyAdmin} = require('../auth')

const {	createProduct,
		allActiveProducts,
		getSingleProduct,
		updateProductDetails,
		archiveProduct} = require('../controllers/productControllers')

//Create Product
router.post('/',verify,verifyAdmin,createProduct);

//Retrieve all active products
router.get('/',allActiveProducts);

//Retrieve single product
router.get('/:id',getSingleProduct);

//Update product details
router.put('/:id',verify,verifyAdmin,updateProductDetails);

//Archive product
router.put('/archive-prod/:id',verify,verifyAdmin,archiveProduct);

module.exports = router;