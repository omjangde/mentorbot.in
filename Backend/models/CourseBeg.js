const mongoose = require('mongoose');

const beginnerCourseSchema = new mongoose.Schema({
    begcTitle: { type: String, required: true },
    begcfees: { type: String, required: true },
    begcinstructor: { type: String, required: true },
    begcinstructordomain: { type: String, required: true },
    begcwhatlearn: { type: String, required: true },
    begcwhofor: { type: String, required: true },
    begcsyllabus: { type: String, required: true },
    begcImage: {
        data: Buffer,
        contentType: String
    }
});

const BeginnerCourse = mongoose.model('BeginnerCourse', beginnerCourseSchema);

module.exports = BeginnerCourse;
