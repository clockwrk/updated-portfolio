'use strict';


var router = require('express').Router();

router.use('/comment', require('./api/post.js'));
router.use('/project', require('./api/project.js'));

module.exports =router;