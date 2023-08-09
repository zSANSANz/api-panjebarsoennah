const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    console.log('Received token:', token);

    if (!token) {
        return res.status(401).json({
            code: 401,
            message: 'Unauthorized: Missing token',
        });
    }

    jwt.verify(token, 'secretcode', (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({
                code: 401,
                message: 'Unauthorized: Invalid token',
                err: err,
            });
        }

        req.username = decoded.username;
        console.log("req.username", req.username)
        next();
    });
}

module.exports = verifyToken;
