var express = require('express')
var router = express.Router();
var Post = require('../../db/models/post.js')
var Promise = require('bluebird')
module.exports = router;




router.get('/', function(req, res, next) {

    console.log('Hit the comment route')

    console.log(Post)

    Post.findAll({})
        .then(function(posts) {
            res.send(posts)
        })
        .catch(next);
})

router.get('/:postID', function(req, res, next) {

    Post.findById(req.params.postId)
        .then(function(post) {
            res.send(post)
        })
        .catch(next);
})

router.post('/', function(req, res, next) {

    console.log('Hit post route')

    console(req.body)

    Post.create({ content: req.body.content })
        .then(function() {
            res.status(201)
        })
        .catch(next)
})

router.put('/:postId', function(req, res, send) {
            Post.update(req.body, {
                    where: {
                        id: req.params.postId
                    }
                })
                .then(function(post) {
                    res.send(post)
                })
                .catch(next)
            })
            
router.delete('/:postId', function(req, res, next){
		Post.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(){
			res.send(204)
		})
		.catch(next)
})

