const express = require('express');
const router = express.Router();
const {verify,verifyAdmin} = require('../auth')

const {register,login,updateAdmin} = require('../controllers/userControllers');

//Registration
router.post('/',register);

//Login
router.post('/login',login);

//Update user as Admin
router.put('/:id',verify,verifyAdmin,updateAdmin);

module.exports = router