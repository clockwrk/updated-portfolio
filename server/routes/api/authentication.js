var express = require('express')
var router = express.Router()
var User = require('../../db/models/user.js')
module.exports = router

router.get('/:userName/:password', function(req, res, next) {
    User.findOne({
            where: { userName: req.params.userName }
        })
        .then(function(user) {
            if (!user || !user.correctPassword(req.params.password)) {
                res.send(false)
            } else {
                res.send(user)
            }
        }).catch()
})
