'use strict';

var router = require('express').Router();
var path = require('path'),
	mime = require('mime'),
	fs = require('fs');


router.use('/resume', router.get('/',function(req,res){

	var file = path.join(__dirname, '../../browser/asset/Jose_Renteria_Resume.pdf');
	console.log('The resume route', file)
	res.download(file);
	})
)

module.exports = router;
