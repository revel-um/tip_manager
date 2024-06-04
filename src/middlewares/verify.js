const jwt = require('jsonwebtoken');

function verifyAccessToken(req, res, next) {
    // Get the Authorization header from the request
    const authorizationHeader = req.headers['authorization'];

    // Check if Authorization header exists and starts with 'Bearer '
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        // Extract the token from the header
        const token = authorizationHeader.split(' ')[1];

        // Verify the token
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.email = payload.email;
        req.session = payload.session;
        next();
    } else {
        res.status(401).json({
            statusCode: 401,
            success: false,
            message: "Unauthorized"
        });
    }
}

module.exports = verifyAccessToken;
