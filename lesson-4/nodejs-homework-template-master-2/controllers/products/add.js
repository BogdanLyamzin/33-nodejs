const productsOperations = require("../../model/products");

const add = async (req, res) => {
    const result = await productsOperations.add(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}

module.exports = add;