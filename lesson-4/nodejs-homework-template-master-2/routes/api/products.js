const express = require("express");

const {validation, ctrlWrapper} = require("../../middlewares");
const {productSchema} = require("../../schemas");
const {products: ctrl} = require("../../controllers")

const validateMiddleware = validation(productSchema);
/*
validateMiddleware = (req, res, next)=> {
        const {error} = productSchema.validate(req.body);
        if(error){
            error.status = 400;
            next(error);
        }
        next()
    }
*/
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.put("/:id", validation(productSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;