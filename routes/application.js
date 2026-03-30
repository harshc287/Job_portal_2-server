const express = require('express');

const {applyJob, getApplications} = require('../controllers/applicationController')
const {protect} = require('../middleware/auth')   
const {user, admin} = require('../middleware/rolecheck')

const route = express.Router()  

route.post('/apply/:jobId', protect, user, applyJob)
route.get('/applicants/:jobId', protect, admin, getApplications)

module.exports = route