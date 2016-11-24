var db = require("index");

var Post = db.define('post', {
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

module.exports = {
	Post: Post
}
