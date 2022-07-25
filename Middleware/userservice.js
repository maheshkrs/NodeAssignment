const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;

const { User, userSchema } = require("../models/user");

//********* */ USER SIGNUP************
module.exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      const signup = new userSchema({
        email: req.body.email,
        password: hash,
      });
      userSchema.findOne({ email: req.body.email }, (err, doc) => {
        if (!err & (doc !== null)) {
          console.log("one");
          res.status(500).json({
            status: 500,
            message: "User Exists",
          });
        } else {
          console.log("two");
          signup
            .save()
            .then((result) => {
              console.log(result);
              res.status(200).json({
                status: 200,
                message: "User created",
              });
            })
            .catch((err) => {
              console.log("test", err);
              res.status(404).json({
                status: 404,
                message: "failed",
              });
            });
        }
      });
    }
  });
};

//********* */ USER SIGNIN************

module.exports.login = (req, res) => {
  userSchema
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user < 1) {
        return res.status(404).json({
          status: 404,
          message: "email not found, user doesnot exist",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(404).json({
            status: 404,
            message: "password Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );

          return res.status(200).json({
            status: 200,
            message: "Auth Succesfull",
            token: token,
          });
        }
        res.status(401).json({
          status: 401,
          message: "password Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "login failed",
      });
    });
};
