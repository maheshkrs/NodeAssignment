const mongoose = require("mongoose");

// exports.User = mongoose.model("User", {
//   name: { type: String, required: true },
//   emp_id: { type: Number, unique: true },
//   designation: { type: String },
//   password: { type: String },
// });

exports.userSchema = mongoose.model("userSchema", {
  email: { type: String, required: true },
  password: { type: String, required: true },
});
// console.log("user", User.name);
// module.exports = { User, };
