const express = require("express");
const app = express();
const mongoose = require("mongoose");

const couponRoutes = require("./routes/coupons");
const authRoutes = require("./routes/auth");
const userProfileRoutes = require("./routes/userProfile");

const bodyParser = require('body-parser')
require('dotenv').config();

app.use(bodyParser.json())

app.use("/auth", authRoutes);
app.use("/coupons", couponRoutes);
app.use("/user", userProfileRoutes); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on localhost, port: " + process.env.PORT);
});

module.exports = app;


