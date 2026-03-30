const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

const generateToken = (id) => {
    return jwt.sign({id, role},
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    )
}

modele.exports = generateToken;