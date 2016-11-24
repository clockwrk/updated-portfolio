var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/portfolio');
var marked = require('marked');
var Post = require('post');
var Reply = require('reply')

Reply.belongsTo(Post)

module.exports = db;