var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	username: {
		type: String,
		required: true,
		max: 20,
		min: 6
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6
	},
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;