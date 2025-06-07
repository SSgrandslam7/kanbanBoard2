import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Missing token' });
        return;
    }
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
        res.status(500).json({ message: 'JWT secret not defined' });
        return;
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.error('JWT authentication error:', err);
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};
