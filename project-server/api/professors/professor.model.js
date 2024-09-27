const mongoose = require('mongoose');
const ProfessorSchema = new mongoose.Schema(
	{
		name: String,
		department: String,
		bio: String,
		courses: [String],
	}
);
const Professor = mongoose.model('Professor', ProfessorSchema);
module.exports = Professor;