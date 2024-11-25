const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    name: String,
    description: String,
    department: String,
    prerequisites: [String],
    capacity: Number,
    professors: [String]
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

CourseSchema.virtual('')