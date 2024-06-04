const jwt = require('jsonwebtoken');

function generateAccessToken(email,  session) {
    return jwt.sign({ email, session }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
}

module.exports = generateAccessToken;