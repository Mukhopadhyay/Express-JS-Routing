const express = require('express');
const path = require('path');

const router = express.Router();

//Get route
router.get('/submit', function(req, res, next) {
    res.send('GET request made');
    next();
});

//POST route
router.post('/submit', function(req, res, next) {
    res.redirect(path.join(__dirname,'./../public/about.html'));
});

module.exports = router;