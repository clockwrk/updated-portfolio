

console.log('IN production', process.env.DATABASE_URL)


module.exports = {
	DATABASE_URL: process.env.DATABASE_URL,
	SESSION_SECRET: process.env.SESSION_SECRET,
	LOGGING: true,
	NATIVE: true
};