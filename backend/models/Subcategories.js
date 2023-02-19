const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCategorySchema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    image:{ type: String, require: true },
});

module.exports = mongoose.model("subcategory", subCategorySchema);