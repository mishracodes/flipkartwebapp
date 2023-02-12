const mongoose = require('mongoose');
const mongoURI ='mongodb+srv://mcodeskart:KswxErqmFoOjBA3l@cluster0.eanmbjk.mongodb.net/store';
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        mongoose.set("strictQuery", true);
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;

