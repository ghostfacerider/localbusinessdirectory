const express = require("express");
// import express from "express";

const router = express.Router();

//Defind any sub-router of our API
//Autocomplete
// var autocompleteRouter = require("./autocomplete");
// router.use("/autocomplete", autocompleteRouter);

//Bulk search
// var bulkSearchRouter = require("./bulksearch");
// router.use("/bulksearch", bulkSearchRouter);

//business Details
var businessDetailsRouter = require("./businessDetails");
router.use("/businessDetails", businessDetailsRouter.businessListing);
router.use("/businessDetail/:id", businessDetailsRouter.singleBusiness);

//business Photos
var businessPhotosRouter = require("./businessPhotos");
router.use("/businessPhotos", businessPhotosRouter);

//business Photos Details
var businessPhotosDetailsRouter = require("./businessPhotosDetails");
router.use("/businessPhotosDetails", businessPhotosDetailsRouter);

//business Posts
var businessPostsRouter = require("./businessPosts");
router.use("/businessPosts", businessPostsRouter);

//business Reviews
var businessReviewsRouter = require("./businessReviews");
router.use("/businessReviews", businessReviewsRouter);

//Our welcome endpoint
router.get("/", (req, res) => {
  res.send("Welcome to our API");
});

//search

//search
var searchRouter = require("./search");
router.use("/search", searchRouter.fetchSearchData);


//search in area
router.use("/searchinarea", searchRouter.fetchSearchInAreaData);

//search nearby
// var searchNearByRouter = require("./searchNearBy");
// router.use("/searchnearby", searchNearByRouter);

//Users
var usersRouter = require("./users");
router.use("/users", usersRouter);

module.exports = router;
