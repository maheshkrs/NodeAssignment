const mongoose = require("mongoose");

exports.Products = mongoose.model("Products", {
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
});
