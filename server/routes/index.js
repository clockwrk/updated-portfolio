'use strict';

var router = require('express').Router();
var path = require('path'),
	mime = require('mime'),
	fs = require('fs');

router.use('/comment', require('./api/post.js'));
router.use('/project', require('./api/project.js'));
router.use('/authentication', require('./api/authentication.js'))
router.use('/reply', require('./api/reply.js'))
router.use('/resume', router.get('/',function(req,res){

	var file = path.join(__dirname, '../../browser/asset/Jose_Renteria_Resume.doc');
	console.log('The resume route', file)


	res.download(file);
	// var filename = path.basename(file);
	// var mimetype = mime.lookup(file);

	// res.setHeader('Content-disposition', 'attachment; filename=' + filename);
 //  	res.setHeader('Content-type', mimetype);

	// var filestream = fs.createReadStream(file);

	// if(filestream){
 //  		filestream.pipe(res);
 //  	}else{
 //  		res.

	})
)


module.exports = router;
