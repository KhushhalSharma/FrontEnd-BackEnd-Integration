const express = require("express");

const Product = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let products = await Product.find();
  res.send(products);
});
module.exports = app;
