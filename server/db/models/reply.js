var db = require("index");

var Reply = db.define('Reply', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Reply