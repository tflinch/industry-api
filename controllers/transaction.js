const express = require('express');
const router = express.Router();
const passport = require('../config/passport-config');

// import User model
const { Transaction } = require('../models');

// ======== GET ROUTES ===============
router.get('/transaction', async(req, res) =>{

    let getTransactions = await Transaction.find({})
    res.json(getTransactions)
    
});