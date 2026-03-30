const User = require('../models/User')
const generateToken = require('../utils/generateToken')

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await User.findOne
        
    } catch (error) {
        res.status(500).json({messsage: "server error"})
    }
}