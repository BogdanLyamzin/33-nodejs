const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async()=> {
    const data = await fs.readFile(filePath);
    const products = JSON.parse(data);
    return products;
}

module.exports = getAll;