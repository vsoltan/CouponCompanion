const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get("/", (req, res, next) => {
    res.send("hello from auth");
});

router.post("/register", (req, res, next) => {
    if (req.body.firstName === undefined) {
        return res.status(422).send("Please supply a first name");
    }
    if (req.body.lastName === undefined) {
        return res.status(422).send("Please supply a last name");
    }
    if (req.body.username === undefined) {
        return res.status(422).send("Please supply a user name");
    }
    if (req.body.password === undefined) {
        return res.status(422).send("Please supply a user name");
    }

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            return res.send("Password Encryption Error: " + err.message); 
        }
        req.body.password = hash;
        const registeredUser = new User(req.body);
        registeredUser.save((err) => {
            if (err) {
                return res.status(400).send("Registration Error: " + err.message);
            }
            return res.status(200).send("Registration: Successful");
        });
    });
});

router.post("/login", async (req, res, next) => {
    if (req.body.username === undefined) {
        return res.status(422).send("Please supply a username");
    }
    if (req.body.password === undefined) {
        return res.status(422).send("Please supply a password");
    }

    const user = await User.findOne({ username: req.body.username });

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            return res.send("Comparing Passwords Error: " + err.message); 
        }
        if (result) {
            let userSignature = {
                _id: user._id
            };
            // create and assign token to current user 
            const token = jwt.sign(userSignature, process.env.JWT_SECRET, { expiresIn: "2h" });
            res.header('auth-token', token).send(token);
        } else {
            return res.status(401).send("Invalid Password"); 
        }
    }); 
});

module.exports = router; 