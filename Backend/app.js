// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jobappicationRoute = require('./routes/jobApplication')
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/api', jobappicationRoute);

module.exports = app;
