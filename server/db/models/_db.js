var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/portfolio', {
    logging: false
});

module.exports = db;
