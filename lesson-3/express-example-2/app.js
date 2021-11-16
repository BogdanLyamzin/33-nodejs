const express = require("express");

const products = require("./products");

const app = express();

// app.set("json spaces", 18);

app.get("/products", (req, res)=> {
    // res.json(null);
    // res.send(null);
    // res.json({
    //     status: "success",
    //     code: 200,
    //     data: {
    //         result: products
    //     }
    // });
    // res.json(products);
    // res.send(products);
    // res.render("products", {name: "iPhone"} )
});

app.listen(3000);

