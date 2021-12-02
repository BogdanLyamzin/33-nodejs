const { NotFound } = require("http-errors");

const {Product} = require("../../models");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByIdAndRemove(id);
    if (!result) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        message: "product deleted",
        data: {
            result
        }
    })
}

module.exports = removeById;