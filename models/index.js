const mongoose = require('mongoose')
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

//import 

const Customer = require('./customer');
const Account = require('./accounts');
const Transaction = require('./transaction');
const Card = require('./card');

const db = mongoose.connection;

db.once("open", () =>
    console.log(`Connected to MongoDB at ${db.host}.${db.port}`)
  );
db.on("error", (error) => console.log("Database error \n", error));

module.exports={
    Customer, Account, Transaction, Card
  }