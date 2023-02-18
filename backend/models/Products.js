const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, require: true },
    subcategory: { type: String, require: true },
    price:{ type: Number, require: true },
    discountPrice:{ type: Number, require: true },
    image:{ type: Array, require: true },
    fAssured:{ type: Boolean, require: true },
    rate:{ type: Number, require: true },
    count:{ type: Number, require: true },
    brand:{ type: String, require: true },
    specifications:{ type: Object, require: true },
    description:{ type: String, require: true },
});

module.exports = mongoose.model("product", productSchema);