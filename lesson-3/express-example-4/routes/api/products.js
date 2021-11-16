const express = require("express");
const {v4} = require("uuid");

const products = require("../../data/products");

const router = express.Router();
/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/
// GET /api/products
router.get("/", (req, res)=> {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    })
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const result = products.find(item => item._id === id);
    if(!result){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`
        })
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
})
// POST /api/products
router.post("/", (req, res)=> {
    const newProduct = {...req.body, id: v4()};
    products.push(newProduct);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result: newProduct
        }
    });
});


module.exports = router;