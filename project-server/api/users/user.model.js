const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			lowercase: true,
			required: true
		},
		password: {
			type: String,
			required: true
		},
	}
);
const User = mongoose.model('User', UserSchema);
module.exports = User;