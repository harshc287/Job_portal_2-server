const Job = require('../models/JobModel');

exports.createJob = async (req, res) => {
    try {

        const {title, description, location} = req.body

        const job = await Job.create({
            title, description, location, createdBy: req.user._id,
        })        

        res.status(201).json(job)

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

exports.getJobs = async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 3;
        const skip = (page - 1) * limit;

        let query = {};

        

        if(req.query.search){
            query.$or =[
                {title: {$regex: req.query.search, $options: 'i'}},
                {location: {$regex: req.query.search, $options: 'i'}}
            ]
            }
        
            const jobs = await Job.find(query)
            .skip(skip)
            .limit(limit)
            .sort({createdAt: -1})
            .populate('createdBy', 'name email')

            const total = await Job.countDocuments(query)

            res.json({
                jobs,
                page,
                totalPages: Math.ceil(total/limit)
            })
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}
