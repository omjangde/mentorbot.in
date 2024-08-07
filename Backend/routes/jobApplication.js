// routes/jobApplications.js
const express = require('express');
const multer = require('multer');
// const JobApplication = require('../models/JobApplication');
const JobApplication = require('../models/JobAppilication')
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/apply', upload.single('resume'), async (req, res) => {
    const { name, email, phone, contactMethod, graduation, experience, aboutYou, meetDate, meetTime, fullAddress, jobTitle} = req.body;
    let resume = null;

    if (req.file) {
        resume = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newJobApplication = new JobApplication({
        name,
        email,
        phone,
        contactMethod,
        graduation,
        experience,
        resume,
        aboutYou,
        meetDate,
        meetTime,
        fullAddress,
        jobTitle,
    });

    try {
        await newJobApplication.save();
        res.status(200).send('Job application submitted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting job application');
    }
});

module.exports = router;
