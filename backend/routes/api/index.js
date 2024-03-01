const express = require("express");
// import express from "express";

const router = express.Router();

//Defind any sub-router of our API
//Users
var usersRouter = require("./users");
router.use("/users", usersRouter);

//businessDetails
var businessDetailsRouter = require("./businessDetails");
router.use("/businessDetails", businessDetailsRouter);

//Our welcome endpoint
router.get("/", (req, res) => {
  res.send("Welcome to our API");
});

module.exports = router;
