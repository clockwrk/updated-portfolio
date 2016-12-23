var express = require('express')
var router = express.Router();
var Reply = require('../../db/models/reply')
var Post = require('../../db/models')
var Promise = require('bluebird')
module.exports = router;

router.get('/:postId', function(req, res, next) {

    Reply.findAll({
            where: { post_id: req.params.postId }
        })
        .then(function(repliesBelongingToPost) {
            res.send(repliesBelongingToPost)
        })
        .catch(next)
})

router.post('/', function(req, res, next) {
    Reply.create(req.body)
        .then(function(reply) {
            return reply.setPost(req.body.post_id)
        })
        .then(function(updatedReply) {
            res.send(updatedReply)
        })
        .catch(next)
})
