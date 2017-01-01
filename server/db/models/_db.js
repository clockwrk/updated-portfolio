var Sequelize = require('sequelize');
// var db = new Sequelize('postgres://localhost:5432/portfolio', {
//     logging: false
// });
var path =require('path')
var env = require(path.join(__dirname, '../../env'))

var db = new Sequelize(env.DATABASE_URI, {
    logging: false
});
module.exports = db;

console.log('Loading db')