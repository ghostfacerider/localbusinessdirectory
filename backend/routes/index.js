const express = require("express");
// import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.header("custom-header", "foo");
  res.render("index", { title: "Express" });
});

module.exports = router;
