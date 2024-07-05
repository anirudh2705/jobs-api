const { StatusCodes } = require('http-status-codes')
const User = require('../models/userModel')


const register = async (req, res)=> {

    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res)=> {
    res.send(' user login') 
}

module.exports = {
    register,
    login
}