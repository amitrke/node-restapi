var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/version', function(req, res, next) {
  res.json({ "version": 1.0 });
});

module.exports = router;
