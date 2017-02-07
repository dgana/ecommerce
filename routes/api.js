var express = require('express');
var router = express.Router();
var controller = require('../controllers/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
