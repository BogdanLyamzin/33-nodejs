const { NotFound } = require("http-errors");

const productsOperations = require("../../model/products")

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await productsOperations.updateById(id, req.body);
    if (!result) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = updateById;