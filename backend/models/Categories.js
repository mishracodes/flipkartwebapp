const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, require: true },
    image:{ type: String, require: true },
});

module.exports = mongoose.model("category", categorySchema);