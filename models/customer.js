const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema ({
    id: Number,
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
},{
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports= Customer;