const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customer_cart_itemSchema = new Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
  cart_id: { type: mongoose.Schema.Types.ObjectId, ref: "customer_cart" },
  cart_product_name: String,
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  product_quantity: String,
  cart_total_products: Number,
  cart_total_product_price: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "customer_cart_items",
  customer_cart_itemSchema
);
