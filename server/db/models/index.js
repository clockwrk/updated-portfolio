'use strict';
var db = require('./_db');
module.exports = db;
// var Sequelize = require('sequelize');
// var db = new Sequelize('postgres://localhost:5432/portfolio', {
// 	logging: false
// });


var marked = require('marked');
var Post = require('./post');
var Reply = require('./reply')


// module.exports = db;


Reply.belongsTo(Post, {foreignKey: 'post_id'})
Post.hasMany(Reply, { foreignKey: 'post_id'})