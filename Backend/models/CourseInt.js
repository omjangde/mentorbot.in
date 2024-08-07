const mongoose = require('mongoose');

const intermediateCourseSchema = new mongoose.Schema({
    intcTitle: { type: String, required: true },
    intcfees: { type: String, required: true },
    intcinstructor: { type: String, required: true },
    intcinstructordomain: { type: String, required: true },
    intcwhatlearn: { type: String, required: true },
    intcwhofor: { type: String, required: true },
    intcsyllabus: { type: String, required: true },
    intcImage: {
        data: Buffer,
        contentType: String
    }
});

const IntermediateCourse = mongoose.model('IntermediateCourse', intermediateCourseSchema);

module.exports = IntermediateCourse;
