var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('Project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gitHubSite: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deploySite: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
