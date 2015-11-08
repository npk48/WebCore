var express = require('express');
var router = express.Router();
var path = require('path');
var model = require(__dirname+'/../models/home');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('home', model.data);
});

//router.post('/', function (req, res) {
//	//req.xxx 获取post数据
//	res.send('POST request to the homepage');
//});

module.exports = router;