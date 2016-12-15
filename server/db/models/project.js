var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('Project', {
    deploy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
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
    getterMethods: {
        snippet: function() {
            return this.description
                .split("")
                .splice(0, 100)
                .join('') + "..."
        }
    }
})
