const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;
const { Products } = require("../models/products");
const { User, userSchema } = require("../models/user");
const Cart = require("../models/customer_cart_item");
//

// ADD PRODUCTS
module.exports.addproduct = (req, res) => {
  const products = new Products({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
  });
  Products.findOne({ product_name: req.body.product_name }, (err, doc) => {
    if (!err & (doc !== null)) {
      res.send({
        status: 401,
        message: "products already exists",
      });
    } else {
      products
        .save()
        .then((result) => {
          res.status(200).json({
            status: 200,
            message: "saved product successfully",
          });
        })
        .catch((err) => {
          res.status(404).json({
            status: 404,
            message: "failed to save",
          });
        });
    }
  });
};

// GET PRODUCT LIST
module.exports.list = (req, res) => {
  Products.find((err, doc) => {
    if (!err) {
      res.send({
        status: 200,
        message: "successfully list fetched",
        length: doc.length,
        data: doc,
      });
    } else {
      res.send({
        status: 404,
        message: "failed",
      });
      console.log("Error while getting data");
    }
  });
};
// ADD TO CART
module.exports.addtocart = (req, res) => {
  console.log("step1", req.body);

  userSchema.findOne(
    { _id: req.body.customer_id },
    function (err, customerData) {
      if (customerData) {
        //
        Products.findOne(
          { _id: req.body.product_id },
          function (err, productdata) {
            if (productdata) {
              console.log("product quantity updated");
            } else {
              res.send({
                Message: "Product data not found",
              });
            }
          }
        );
        //
        console.log("new cart created");
        const cart_data = req.body;
        console.log(cart_data);
        const cart_create = new Cart(cart_data);
        cart_create.save().then((data) => {
          res.send({
            status: true,
            status_code: 200,
            Message: "Item Added to cart Successfully",
          });
        });
      } else {
        res.send({
          status_code: 203,
          Message: "Customer doesn't exist",
        });
      }
    }
  );
};
