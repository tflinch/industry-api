const express = require('express');
const app = express(); // our app
const PORT = process.env.PORT || 3000;

const {Customer} = require('./models');
const {Account} = require('./models');
const {Transaction} = require('./models');
const {Card} = require('./models');



app.get('/customer', async(req, res) =>{

    let getCustomers = await Customer.find({})
    res.json(getCustomers)
});


app.get('/account', async(req, res) =>{

    let getAccounts = await Account.find({})
    res.json(getAccounts)
    
});

app.get('/transaction', async(req, res) =>{

    let getTransactions = await Transaction.find({})
    
});


app.get('/card', async(req, res) =>{

    let getCards = await Card.find({})
    
});


Customer.collection.countDocuments({} , (err , data)=> {
    if ( err ) console.log( err.message );
     console.log ( `There are ${data} orders in this database` );
 });



const server = app.listen(PORT, () => {
    console.log('🎧 Server is running on PORT 🎧', PORT);
});

module.exports = server;