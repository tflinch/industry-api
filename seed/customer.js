const mongoose = require('mongoose');

const {Customer} = require('../models')

Customer.create({
    id: 2,
    firstName: 'lamb',
    lastName: 'Curry',
    phone: '222-222-1100',
    address: 'Memory Lane 123 220-21'
})
.then(response => {
    console.log(response);
})
.catch(error => console.log(error))


