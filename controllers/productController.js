const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;
const cutomerservice = require("../Middleware/customerservice");

const multer = require("multer");

// const storage = multer.diskStorage({
//   dest: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });
// const upload = multer({ dest: "uploads/" });

const { Products } = require("../models/products");

// router.post("/addproduct", (req, res) => {
//   const products = new Products({
//     product_name: req.body.product_name,
//     product_price: req.body.product_price,
//   });
//   Products.findOne({ product_name: req.body.product_name }, (err, doc) => {
//     if (!err & (doc !== null)) {
//       res.send({
//         status: 401,
//         message: "products already exists",
//       });
//     } else {
//       products
//         .save()
//         .then((result) => {
//           res.status(200).json({
//             status: 200,
//             message: "saved product successfully",
//           });
//         })
//         .catch((err) => {
//           res.status(404).json({
//             status: 404,
//             message: "failed to save",
//           });
//         });
//     }
//   });
// });

// products list
router.post("/addproduct", cutomerservice.addproduct);
router.get("/list", cutomerservice.list);

// addtoCart
router.post("/addtocart", cutomerservice.addtocart);

// router.get("/list", (req, res) => {
//   Products.find((err, doc) => {
//     if (!err) {
//       res.send({
//         status: 200,
//         message: "successfully list fetched",
//         length: doc.length,
//         data: doc,
//       });
//     } else {
//       res.send({
//         status: 404,
//         message: "failed",
//       });
//       console.log("Error while getting data");
//     }
//   });
// });

// addtoCart

module.exports = router;
