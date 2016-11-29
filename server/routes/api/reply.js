var express = require('express')
var router = express.Router();
var Reply = require('../../db/models/reply')
var Promise = require('bluebird')
module.exports = router;

// router.get('/', function(req, res, next) {

//     Reply.findAll()
//         .then(function(replies) {
//             res.send(replies)
//         })
//         .catch(next);
// })

router.get('/:postId', function(req, res, next) {

        Post.findById(req.params.postId)
            .then(function(post){

                return post.getReplys()
                    .then(function(associatedReplies){
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

// router.put('/:postId', function(req, res, send) {
            //     Post.update(req.body, {
            //             where: {
            //                 id: req.params.postId
            //             }
            //         })
            //         .then(function(post) {
            //             res.send(post)
            //         })
            //         .catch(next)
            // })

            // router.delete('/:postId', function(req, res, next) {
            //     Post.destroy({
            //             where: {
            //                 id: req.params.id
            //             }
            //         })
            //         .then(function() {
            //             res.send(204)
            //         })

//         .catch(next)
// })
