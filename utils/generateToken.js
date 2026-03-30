const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const generateToken = (id, role) => {
    return jwt.sign({id, role},
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    )
}

module.exports = generateToken;