const express = require('express');
const router = express.Router();
const passport = require('../config/passport-config');

// import User model
const { Customer } = require('../models');

// ======== GET ROUTES ===============
router.get('/customer', async(req, res) =>{

    let getCustomers = await Customer.find({})
    res.json(getCustomers)
    
});