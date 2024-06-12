const mongoose = require('mongoose');

const {Card} = require('../models')

Card.create({
    id: 0,
    type: 'String',
    customer_id: Number,
    number: Number,
    limit: Number,
})
.then(response => {
    console.log(response);
})
.catch(error => console.log(error))

