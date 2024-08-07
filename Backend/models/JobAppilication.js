// models/JobApplication.js
const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    contactMethod: String,
    graduation: String,
    experience: String,
    resume: {
        data: Buffer,
        contentType: String
    },
    aboutYou: String,
    meetDate: Date,
    meetTime: String,
    fullAddress: String,
    jobTitle: String,
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
