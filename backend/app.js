//import npm packages
var createError = require("http-errors");
const express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

//loading env variables
require("dotenv").config();

//conect to our monodb
// console.log(`MONGO_DB: ${process.env.MONGO_DB}`);
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//import our rounters
var indexRouter = require("./routes/index"); // index = index.js
var apiRouter = require("./routes/apix"); //api = api folder

//create an instance of express app
const app = express();

// view engine setup..for serving html pages
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors()); // allow access from anywhere
app.use(logger("dev"));
app.use(express.json()); //parses the body from the request an adds it to the re,body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

//direct the incoming request to a particular router
//based on the url path
app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use(bodyParser.json());
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  next();
});

module.exports = app;
