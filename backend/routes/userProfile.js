const express = require('express');
const User = require('../models/user');
const { isLoggedIn } = require('../middleware/verification');
const router = express.Router();

router.get("/", isLoggedIn, async (req, res, next) => {
    const userId = req.user._id;
    const authenticatedUser = await User.findOne({ _id: userId });

    if (!authenticatedUser) {
        res.status(404).send("User does not exist with id");
    }

    let userDocument = {
        firstName: authenticatedUser.firstName,
        lastName: authenticatedUser.lastName,
        username: authenticatedUser.username
    };

    res.status(200).send(userDocument);
});

module.exports = router;

