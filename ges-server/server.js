// 1. run: npm install
// 2. use: the thunder client JSON file and import into Thunder Client Collections
// 3. run: npm run start

const express = require('express');
const cors = require('cors');
const mongo = require('./mongo/index.js');
const app = express();

const PORT = 8080;
const options = { exposedHeaders: ['Authorization'] };

app.use(cors(options));
app.use(express.json());

// require in resource routes
const students = require('./api/students/students.routes.js');
const professors = require('./api/professors/professors.routes.js');
const reviews = require('./api/reviews/reviews.routes.js');
const courses = require('./api/courses/courses.routes.js')

// add the resource route to our express app
// localhost:8080/users
app.use('/students', studentss);
app.use('/professors', professors);
app.use('/reviews', reviews);
app.use('/courses', courses);

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    await mongo.connectDB();
});