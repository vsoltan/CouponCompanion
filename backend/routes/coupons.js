const express = require("express");
const router = express.Router();
const User = require('../models/user'); 

const { isLoggedIn } = require('../middleware/verification');

router.get("/", (req, res, next) => {
    res.send("Hi from Coupons");
});

router.get("/all", isLoggedIn, async (req, res, next) => {
    const userId = req.user._id; 
    const authenticatedUser = await User.findOne({ _id: userId }); 

    if (!authenticatedUser) {
        return res.status(400).send("Retrieve Coupons Error: user does not exist with passed id");    
    }

    console.log(authenticatedUser);
    return res.status(200).send(authenticatedUser.coupons);
}); 

router.post("/add", (req, res, next) => {
    if (req.body.coupon === undefined) {
        res.status(422).send("Please supply a coupon object to add"); 
    }
    
}); 

module.exports = router;