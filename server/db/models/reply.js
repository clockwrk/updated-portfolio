var db = require("./_db.js");
var Sequelize = require('sequelize');

module.exports = db.define('reply', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})
console.log('Loading reply')