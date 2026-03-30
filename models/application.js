const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    appliedAt: { type: Date, default: Date.now }
});   

ApplicationSchema.index({ userId: 1, jobId: 1 }, { unique: true });

const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

module.exports = Application;