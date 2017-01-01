var Sequelize = require('sequelize');
// var db = new Sequelize('postgres://localhost:5432/portfolio', {
//     logging: false
// });
var path =require('path')
var env = require(path.join(__dirname, '../../env'))


console.log("This database is connected to ", env.DATABASE_URL)

var db = new Sequelize(env.DATABASE_URL, {
    logging: false
});
module.exports = db;

console.log('Loading db')