const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// import express from "express";
const router = express.Router();
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

//import  the user module
const User = require("../../models/user");
const Login = require("../../models/login");
const { response } = require("express");
/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

router.post("/register", (req, res) => {
  console.log(req.body);

  //get the  email body from the request
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;

  bcrypt.hash(password, 10, (errors, hash) => {
    console.log(hash);
    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash,
    });
    newUser.save(function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        console.log(result);
        // res.status(201).send("User Saved");
        let tokenSecret = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ data: User }, tokenSecret);
        res.header("Access-Control-Expose-Headers", "x-auth-token");
        res.header("x-auth-token", token);
        res.status(200).send({ serverMessage: "Registion successful" });
      }
    });
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //Create an instance of the login model
  const login = new Login(req.body);
  //execute the validate method...

  login.validate((error) => {
    if (error) {
      // we have validation errors... respond with details
      return res.status(422).send(error);
    }

    User.findOne({ email: email }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          console.log(isMatch);
          //if there's a match, create a token and send back with a
          //a 200 reponse
          if (isMatch) {
            let tokenSecret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ data: user }, tokenSecret);
            res.header("Access-Control-Expose-Headers", "x-auth-token");
            res.header("x-auth-token", token);
            res.status(200).send({ serverMessage: "Login successful" });
          } else {
            res.status(401).send();
          }

          // res.send(token);
          //otherwise send back a 401 response
        });
      } else {
        console.log("User does not exist");

        //send back a 401 response
        res.status(401).send();
      }
    });
  });
});
module.exports = router;
