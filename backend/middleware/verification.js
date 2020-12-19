
const express = require('express');
const jwt = require('jsonwebtoken'); 

const isLoggedIn = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Authentication Error: Missing \'auth-token\' header in request payload');
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid/Expired Token');
    }
};

module.exports.isLoggedIn = isLoggedIn; 