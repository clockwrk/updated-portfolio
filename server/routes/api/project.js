var express = require('express')
var router = express.Router();
var Project = require('../../db/models/project.js')
var Promise = require('bluebird')
module.exports = router;

router.get('/', function(req, res, next) {

    console.log('Hit the project route')
    console.log(Project)

    Project.findAll({})
        .then(function(projects) {
            res.send(projects)
        })
        .catch(next);
})

router.get('/:projectID', function(req, res, next) {

    Project.findById(req.params.projectID)
        .then(function(project) {
            res.send(project)
        })
        .catch(next);
})

router.post('/', function(req, res, next) {
    
    console.log("posting project", req.body)

    Project.create(req.body)
        .then(function() {
            res.status(201)
        })
        .catch(next)
})

router.put('/:projectID', function(req, res, send) {
    Project.update(req.body, {
            where: {
                id: req.params.projectID
            }
        })
        .then(function(project) {
            res.send(project)
        })
        .catch(next)
})

router.delete('/:projectID', function(req, res, next) {
    Project.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.send(204)
        })
        .catch(next)
})
