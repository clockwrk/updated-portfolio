var express = require('express')
var router = express.Router();
var Reply = require('../../db/models/reply')
var Post = require('../../db/models/post')
var Promise = require('bluebird')
module.exports = router;

router.get('/:postId', function(req, res, next) {

    Reply.findAll({
            where: {
                post_id: req.params.postId
            }
        })
        .then(function(repliesBelongingToPost) {
            res.send(repliesBelongingToPost)
        })
        .catch(next)
})

router.post('/', function(req, res, next) {

    console.log(req.body)

    Reply.create(req.body)
        .then(function(reply) {
            console.log(Object.getOwnPropertyNames(reply.dataValues))

            return Post.findById(req.body.post_id)
                .then(function(foundPost) {
                    console.log(Object.getOwnPropertyNames(foundPost.dataValues))


                    foundPost.setReply(reply)
                        .then(function(updatedReply) {
                            return res.send(updatedReply)
                        }).catch()

                }).catch()


            res.send(reply)
        })
        .catch(next)
})
