const mongoose = require('mongoose');
require('dotenv').config();

const dbpass=process.env.DB_PASSWORD
const mongoURI =`mongodb+srv://mcodeskart:${dbpass}@cluster0.eanmbjk.mongodb.net/store`;
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        mongoose.set("strictQuery", true);
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;

