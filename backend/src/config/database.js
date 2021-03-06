const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dotenv = require('dotenv');
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

module.exports = mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
