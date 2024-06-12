const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema ({
    id: Number,
    customer_id:  [{ type: mongoose.Schema.Types.ObjectId , ref: "Customer" }],
    type: String,
    number: String,
    balance: Number,
},{timestamps:true});



const Account = mongoose.model('Account', accountSchema);

module.exports = Account;