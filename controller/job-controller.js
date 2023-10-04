import Job from '../models/job.js';

export const saveJobData = async (req, res) => {
    try {   
        const newJob = new Job(req.body);

        await newJob.save();
        res.status(200).json({ message: "Job save successfully"});
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ err: err.message });
    }
}

export const getJobData = async (req, res) => {
    try {   
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ err: err.message });
    }
}