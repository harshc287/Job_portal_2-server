const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // NEW FIELD

    
}, { timestamps: true });       

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);

module.exports = Job;