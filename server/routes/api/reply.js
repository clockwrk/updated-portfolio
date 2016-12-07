var express = require('express')
var router = express.Router();
var Reply = require('../../db/models/reply')
var Promise = require('bluebird')
module.exports = router;

router.get('/:postId', function(req, res, next) {

    Post.findById(req.params.postId)
        .then(function(post) {

            return post.getReplys()
                .then(function(associatedReplies) {
                    res.send(associatedReplies)
                })
        })
        .catch(next)
})

router.post('/:postId', function(req, res, next) {

    Reply.create({ content: req.body.content })
        .then(function(reply) {

            return Post.findById(req.params.postId)
                .then(function(post) {
                    return post.addReply(reply)
                })
        })
        .catch(next)
})
