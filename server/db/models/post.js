var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('post', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes: {
    	type: Sequelize.INTEGER,
    	defaultValue: 0
    },
    dislikes: {
    	type: Sequelize.INTEGER,
    	defaultValue: 0
    }
})


