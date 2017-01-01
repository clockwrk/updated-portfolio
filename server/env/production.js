

console.log('IN production', process.env.DATABASE_URI)


module.exports = {
	DATABASE_URI: process.env.DATABASE_URI,
	SESSION_SECRET: process.env.SESSION_SECRET,
	LOGGING: true,
	NATIVE: true
};