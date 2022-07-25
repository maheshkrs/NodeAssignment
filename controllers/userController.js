const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;

const { User, userSchema } = require("../models/user");

const userservice = require("../Middleware/userservice");
// console.log("user", userSchema);

// SIGN UP

router.post("/signup", userservice.signup);

router.post("/login", userservice.login);

// router.post("/signup", (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       return res.status(500).json({
//         error: err,
//       });
//     } else {
//       const signup = new userSchema({
//         email: req.body.email,
//         password: hash,
//       });
//       userSchema.findOne({ email: req.body.email }, (err, doc) => {
//         if (!err & (doc !== null)) {
//           console.log("one");
//           res.status(500).json({
//             status: 500,
//             message: "User Exists",
//           });
//         } else {
//           console.log("two");
//           signup
//             .save()
//             .then((result) => {
//               console.log(result);
//               res.status(200).json({
//                 status: 200,
//                 message: "User created",
//               });
//             })
//             .catch((err) => {
//               console.log("test", err);
//               res.status(404).json({
//                 status: 404,
//                 message: "failed",
//               });
//             });
//         }
//       });
//     }
//   });
// });

// Login
//

// router.post("/login", (req, res, next) => {
//   userSchema
//     .findOne({ email: req.body.email })
//     .exec()
//     .then((user) => {
//       if (user < 1) {
//         return res.status(404).json({
//           status: 404,
//           message: "email not found, user doesnot exist",
//         });
//       }
//       bcrypt.compare(req.body.password, user.password, (err, result) => {
//         if (err) {
//           return res.status(404).json({
//             status: 404,
//             message: "password Auth failed",
//           });
//         }
//         if (result) {
//           const token = jwt.sign(
//             {
//               email: user.email,
//               userId: user._id,
//             },
//             process.env.JWT_KEY,
//             {
//               expiresIn: "1h",
//             }
//           );

//           return res.status(200).json({
//             status: 200,
//             message: "Auth Succesfull",
//             token: token,
//           });
//         }
//         res.status(401).json({
//           status: 401,
//           message: "password Auth failed",
//         });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         message: "login failed",
//       });
//     });
// });

// get list

// router.get("/list", (req, res) => {
//   User.find((err, doc) => {
//     if (!err) {
//       res.send(doc);
//     } else {
//       console.log("Error while posting data");
//     }
//   });
// });

//get users based in id
// router.get("/:id", (req, res) => {
//   // if (!ObjectId.isValid(req.params.id))
//   //   return res.status(400).send(`No record for the given-${req.params.id}`);
//   const id = req.params.id;
//   User.findOne({ emp_id: id }, (err, doc) => {
//     console.log(doc, "ttt");
//     if (!err & (doc !== null)) {
//       res.send({ status: 200, message: "success", data: doc });
//     } else {
//       console.log("Error while getting data");
//       res.send({ status: 404, message: "fail" });
//     }
//   });
// });
//
// Delete user

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   User.deleteMany({ emp_id: id }, (err, doc) => {
//     if (!err) {
//       res.send({ status: 200, message: "successfully delete", data: doc });
//     } else {
//       console.log("Error while deleting data");
//       res.send({ status: 404, message: "fail" });
//     }
//   });
// });
//
// update user

// router.patch("/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   User.findOneAndUpdate(
//     { emp_id: id },
//     // { $set: { name: req.body.name } },
//     { $set: { name: req.body.name, work_type: req.body.password } },
//     (err, doc) => {
//       console.log("tesr", doc);
//       if (!err) {
//         res.send({ status: 200, message: "successfully updated", data: doc });
//       } else {
//         console.log("Error while deleting data");
//         res.send({ status: 404, message: "failed to delete" });
//       }
//     }
//   );
// });

//
// router.post("/create", (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     emp_id: req.body.emp_id,
//     designation: req.body.designation,
//     password: req.body.password,
//   });
//   user.save((err, doc) => {
//     if (!err) {
//       res.send({ status: 200, message: "success", data: doc });
//     } else {
//       console.log("Error while posting data");
//       res.send({ status: 404, message: "Failed to register", data: doc });
//     }
//   });

// });
module.exports = router;
