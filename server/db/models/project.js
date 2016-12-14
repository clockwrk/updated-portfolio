var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('Project', {
    deploy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gitHub: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    instanceMethods: {
        snippet: function() {
            return this.description.splice(0, 30) + '...'
        }
    }
})
