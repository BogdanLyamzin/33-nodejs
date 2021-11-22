const {Product} = require("../../models");

const getAll = async(req, res)=> {
    const result = await Product.find({});
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getAll;