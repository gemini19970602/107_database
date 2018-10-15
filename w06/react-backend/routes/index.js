var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404412347', name: '陳弘憲' });
});

module.exports = router;