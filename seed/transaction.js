const mongoose = require('mongoose');

const {Transaction} = require('../models')

Transaction.create({
    id: 0,
    account_id: 0,
    type: "Deposit",
    amount: 20000,
})
.then(response => {
    console.log(response);
})
.catch(error => console.log(error))

