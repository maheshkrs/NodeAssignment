const mongoose = require("mongoose");
var morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

// console.log(process.env);
// console.log(process.env.PORT);
// var port = process.env.PORT;
// console.log("Port is ", port);
// app.use(morgan("common"));

mongoose.connect("mongodb://localhost:27017/firstAssignment", (err) => {
  if (!err) {
    console.log("Mongoose connected successfully");
  } else {
    console.log("Error in connection");
  }
});
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}..`);
});
