var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    partials = req.app.get('partials');
    res.render('others/privacy', { title: 'Privacy', partials: partials});
    });
module.exports = router;
