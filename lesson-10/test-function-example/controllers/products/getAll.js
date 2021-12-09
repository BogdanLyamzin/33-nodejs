const products = [
    {
        id: "1",
        name: "iPhone X",
        price: 17000
    }
];

const getAll = async(req, res)=> {
    res.json(products)
}

module.exports = getAll;