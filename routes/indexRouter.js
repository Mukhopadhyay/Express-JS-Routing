const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, './../public/index.html'));
});


//Adding a second parameter
router.get('/index/:id/:name', (req, res, next) => {
    res.json({
        id:req.params.id,
        name:req.params.name
    })
});

// ':id' specifies that this route expects an id
// get parameter after the second slash (/, after test)
router.get('/index/:id', (req, res, next) => {
    res.type('html');
    res.write("<h1>id: "+req.params.id+"</h1>");
})

module.exports = router;