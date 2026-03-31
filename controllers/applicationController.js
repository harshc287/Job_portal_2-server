const Application = require('../models/Application');
const Job = require('../models/JobModel');

console.log("Application model:", Application);
console.log("Job model:", Job);


exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job Not Found" });

    const existing = await Application.findOne({
      userId: req.user.id,
      jobId
    });

    if (existing) {
      return res.status(400).json({ message: "Already applied for this job" });
    }

    const app = await Application.create({
      userId: req.user.id,
      jobId
    });

    res.status(201).json(app);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET APPLICATIONS (ADMIN)
exports.getApplications = async (req, res) => {
  try {
    const { jobId } = req.params;

    const apps = await Application.find({ jobId })
      .populate('userId', 'name email');

    const result = apps.map(app => ({
      name: app.userId.name,
      email: app.userId.email,
      appliedDate: app.appliedAt
    }));

    res.json(result);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
