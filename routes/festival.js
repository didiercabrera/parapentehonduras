var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/gallery', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/webflow/festival/gallery.html'))
});

router.get('/registration', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/webflow/festival/registration.html'))
});


module.exports = router;
