'use strict';
var db = require('./_db');
module.exports = db;

var marked = require('marked')
var Post = require('./post')
var Reply = require('./reply')
var User = require('./user')
var Project = require('./project')

Reply.belongsTo(Post)
Post.hasMany(Reply)

console.log('Loading index')