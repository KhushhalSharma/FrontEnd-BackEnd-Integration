const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./features/user/user.router");
const productRouter = require("./features/product/product.router");
const cartRouter = require("./features/cart/cart.router");
const cors = require("cors");
let PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.listen(PORT, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/psc");
  console.log(`Listening on http://localhost:${PORT}`);
});
