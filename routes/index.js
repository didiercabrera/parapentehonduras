var express = require('express');
var router = express.Router();
var path = require('path')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/faq', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/webflow/faq.html'))
});

router.get('/contact-us', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/webflow/contact-us.html'))
});

module.exports = router;