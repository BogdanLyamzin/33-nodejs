const express = require("express");
// const createError = require("http-errors");
const {NotFound} = require("http-errors");
const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required(),
})

const productsOperations = require("../../model/products");

const router = express.Router();

router.get("/", async(req, res, next)=>{
    try {
        const products = await productsOperations.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: products
            }
        });
    } catch (error) {
        next(error);
        // res.status(500).json({
        //     status: "error",
        //     code: 500,
        //     message: "Server error"
        // })
    }
});

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.getById(id);
        if(!result){
            throw new NotFound( `Product with id=${id} not found`);
            // throw createError(404, `Product with id=${id} not found`);
            // const error = new Error(`Product with id=${id} not found`);
            // error.status = 404;
            // throw error;
            // res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Product with id=${id} not found`
            // });
            // return;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req, res, next)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            error.status = 400;
            throw error;
        }
        const result = await productsOperations.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            error.status = 400;
            throw error;
        }
        const {id} = req.params;
        const result = await productsOperations.updateById(id, req.body);
        if(!result){
            throw new NotFound( `Product with id=${id} not found`);
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.removeById(id);
        if(!result){
            throw new NotFound( `Product with id=${id} not found`);
        }
        // res.status(204).json()
        res.json({
            status: "success",
            code: 200,
            message: "product deleted",
            data: {
                result
            }
        })

    } catch (error) {
        next(error);
    }
})

module.exports = router;