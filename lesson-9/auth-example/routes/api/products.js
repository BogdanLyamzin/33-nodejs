const express = require("express");

const {auth, validation, ctrlWrapper} = require("../../middlewares");
const {joiSchema, statusJoiSchema} = require("../../models/product");
const {products: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/status", validation(statusJoiSchema), ctrlWrapper(ctrl.updateStatus));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;