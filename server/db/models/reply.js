var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('Reply', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})
