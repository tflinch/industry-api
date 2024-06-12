const mongoose = require('mongoose');

const {Account} = require('../models')

Account.create({
    id: 0,
    customer_id: '666918caf43d1d86b06f1925',
    type: 'Checking',
    number: '222222100',
    balance: '200000000'
})
.then(response => {
    console.log(response);
})
.catch(error => console.log(error))