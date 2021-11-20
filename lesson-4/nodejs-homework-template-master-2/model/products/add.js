const {v4} = require("uuid");

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const add = async(data)=> {
    const products = await getAll();
    const newProduct = {...data, id: v4()};
    products.push(newProduct);
    await updateProducts(products);
    return newProduct;
}

module.exports = add;