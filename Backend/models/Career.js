const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    location: String,
    jobDescription: String,
    responsibilities: String,
    qualifications: String,
    howToApply: String,
    contactEmail: String,
    applicationDeadline: Date,
    jobImage: {
        data: Buffer,
        contentType: String
    }
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
