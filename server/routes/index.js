'use strict';

var router = require('express').Router();

router.use('/comment', require('./api/post.js'));
router.use('/project', require('./api/project.js'));
router.use('/authentication', require('./api/authentication.js'))
router.use('/reply', require('./api/reply.js'))

module.exports = router;
