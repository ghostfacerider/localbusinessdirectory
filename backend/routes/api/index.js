const express = require("express");
// import express from "express";

const router = express.Router();

//Defind any sub-router of our API
//Users
var usersRouter = require("./users");
router.use("/users", usersRouter);

//business Details
var businessDetailsRouter = require("./businessDetails");
router.use("/businessDetails", businessDetailsRouter);

//business Reviews
var businessReviewsRouter = require("./businessReviews");
router.use("/businessReviews", businessReviewsRouter);

//business Posts
var businessPostsRouter = require("./businessPosts");
router.use("/businessPosts", businessPostsRouter);

//Our welcome endpoint
router.get("/", (req, res) => {
  res.send("Welcome to our API");
});

module.exports = router;
