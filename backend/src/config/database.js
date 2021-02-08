const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DB_USER = 'b3_user';
const DB_PASS = '@dmA87782930';
const DB_NAME = 'todo_app_cod3r';
const DB_HOST = 'cluster0.ntlsu.mongodb.net';
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
module.exports = mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// module.exports = mongoose.connect('mongodb://localhost/todo');
