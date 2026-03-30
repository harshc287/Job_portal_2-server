const express = require('express');

const { createJob, getJobs} = require('../controllers/jobcontroller')
const {protect} = require('../middleware/auth')
const {admin} = require('../middleware/rolecheck')         

const route = express.Router()

route.post('/', protect, admin, createJob)
route.get('/', protect, getJobs)


module.exports = route
