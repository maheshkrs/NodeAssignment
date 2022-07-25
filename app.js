const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

app.use(bodyParser.json());
// app.listen(3000, () => console.log("Server started on the port 3000"));

app.use("/api/v1/users", userController);
app.use("/api/v1/products", productController);

module.exports = app;
