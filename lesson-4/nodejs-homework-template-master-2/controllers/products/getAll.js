const productsOperations = require("../../model/products");

const getAll = async (req, res) => {
    const products = await productsOperations.getAll();
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
};

module.exports = getAll;