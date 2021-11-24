const {Product} = require("../../models");

const getAll = async (req, res) => {
    const products = await Product.find({});
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
};

module.exports = getAll;