'use strict';
var db = require('./_db');
module.exports = db;

var marked = require('marked');
var Post = require('./post');
var Reply = require('./reply')

Reply.belongsTo(Post, { foreignKey: 'post_id' })
Post.hasMany(Reply, { foreignKey: 'post_id' })
