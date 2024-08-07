const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Blog = require('./models/Blog'); // Import Blog model
const Career = require('./models/Career');
const CourseInt = require('./models/CourseInt');
const CourseBeg = require('./models/CourseBeg');
const CourseExp = require('./models/CourseExp');
const jobappicationRoute = require('./routes/jobApplication')
const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin1234@mentorbot.6ggoacm.mongodb.net/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching blogs');
    }
});
app.get('/careers', async (req, res) => {
    try {
        const careers = await Career.find();
        res.status(200).json(careers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching careers');
    }
});

// Add GET request for CourseInt
app.get('/courses/int', async (req, res) => {
    try {
        const coursesInt = await CourseInt.find();
        res.status(200).json(coursesInt);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching intermediate courses');
    }
});

// Add GET request for CourseBeg
app.get('/courses/beg', async (req, res) => {
    try {
        const coursesBeg = await CourseBeg.find();
        res.status(200).json(coursesBeg);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching beginner courses');
    }
});

// Add GET request for CourseExp
app.get('/courses/exp', async (req, res) => {
    try {
        const coursesExp = await CourseExp.find();
        res.status(200).json(coursesExp);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching expert courses');
    }
});

app.use('/api', jobappicationRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
