const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render(path.join(__dirname, './../public/routes.ejs'));
});

router.get('/:id', (req, res, next) => {
    res.send('id: '+req.params.id);
    // res.render(path.join(__dirname, './../public/routes.ejs'), {
    //     output: req.params.id
    // });
});

module.exports = router;