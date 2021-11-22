const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./routes/api/products")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
    .then(()=> app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })