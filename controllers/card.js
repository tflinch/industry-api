const express = require('express');
const router = express.Router();
const passport = require('../config/passport-config');

// import User model
const { Card } = require('../models');

// ======== GET ROUTES ===============
router.get('/card', async(req, res) =>{

    let getCards = await Card.find({})
    res.json(getCards)
    
});