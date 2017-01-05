var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('project', {
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
    },
    techList: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    videoLink:{
        type: Sequelize.STRING
    }
}, {
    getterMethods: {
        snippet: function() {
            console.log('Current description', this)
            return this.description
                .split("")
                .splice(0, 50)
                .join('') + "..."
        },
        technology: function() {
            console.log('Current techList', this.techList)
            return this.techList
                .split(",")
        }
    }
})

console.log('Loading projects')
