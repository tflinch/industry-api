const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema ({
    id: Number,
    type: String,
    customer_id: { type: Number, ref: 'Customer'},
    number: Number,
    limit: Number,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;