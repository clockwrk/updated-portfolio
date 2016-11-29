'use strict';

var router = require('express').Router();

router.use('/comment', require('./api/post.js'));

module.exports =router;