const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    categoryID: { type: Number, require: true },
    subCategoryID: { type: Array, require: true },
    name: { type: String, require: true },
    image:{ type: String, require: true },
    rating:{ type: Object, require: true },
    price:{ type: Number, require: true },
    discountPrice:{ type: Number, require: true },
    fAssured:{ type: Boolean, require: true },
    description:{ type: String, require: true },
    brand:{ type: String, require: true },
});

module.exports = mongoose.model("product", productSchema);