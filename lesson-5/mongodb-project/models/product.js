const {Schema, model} = require("mongoose");

const productSchema = Schema({
    name: String,
    price: Number,
    location: String
});

const Product = model("product", productSchema);
// categories => category
// mice => mouse

module.exports = Product;