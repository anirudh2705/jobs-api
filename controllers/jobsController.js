const { StatusCodes } = require("http-status-codes")
const Jobs = require('../models/jobsModel')

const getAllJobs = (req, res) => {
    res.status(StatusCodes.OK).json({jobs : '200 found jobs'})
}

const createJob = async (req,res)=> {
    try {
    
    const job = await Jobs.create(req.body)
    res.status(StatusCodes.CREATED).json({msg: 'created', job})
    } catch (error) {
       console.log(error); 
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'bad req'})
    }
    
}

module.exports = {
    getAllJobs,
    createJob
}