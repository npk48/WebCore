var express = require('express');
var router = express.Router();
var path = require('path');
var model = require(__dirname+'/../models/home');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('home', model.data);
});

module.exports = router;