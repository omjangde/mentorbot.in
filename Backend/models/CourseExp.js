const mongoose = require('mongoose');

const expertCourseSchema = new mongoose.Schema({
    expcTitle: { type: String, required: true },
    expcfees: { type: String, required: true },
    expcinstructor: { type: String, required: true },
    expcinstructordomain: { type: String, required: true },
    expcwhatlearn: { type: String, required: true },
    expcwhofor: { type: String, required: true },
    expcsyllabus: { type: String, required: true },
    expcImage: {
        data: Buffer,
        contentType: String
    }
});

const ExpertCourse = mongoose.model('ExpertCourse', expertCourseSchema);

module.exports = ExpertCourse;