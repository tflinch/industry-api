const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema ({
    id: Number,
    account_id: { type: Number, ref: 'Account' },
    type: String,
    amount: Number,
},);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports= Transaction;