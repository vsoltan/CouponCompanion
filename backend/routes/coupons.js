const express = require("express");
const router = express.Router();
const User = require('../models/user'); 

const { isLoggedIn } = require('../middleware/verification');
const { isValidCoupon } = require('../middleware/validation'); 

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

router.post("/add", isLoggedIn, (req, res, next) => {
    if (req.body.coupon === undefined) {
        res.status(422).send("Please supply a coupon object to add"); 
    }
    if (!isValidCoupon(req.body.coupon)) {
        res.status(422).send("Coupon object is improperly formatted!"); 
    }
    User.findOneAndUpdate(
        { _id: req.user._id }, 
        { $push: { 
            coupons: {
                $each: [ req.body.coupon ], 
                $sort: { companyName: 1 }
            }
        }}, 
        (err, result) => {
            if (err) {
                res.status(400).send("Updating coupon collection error: " + err.message); 
            } else {
                res.status(200).send("Updated coupon collection successfully!"); 
            }
        }
    );
}); 

module.exports = router;