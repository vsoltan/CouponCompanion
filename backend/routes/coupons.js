var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hi from Coupons");
});

router.get("/all", (req, res, next) => {
    
}); 

module.exports = router;