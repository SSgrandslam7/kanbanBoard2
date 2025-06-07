import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log('JWT_SECRET_KEY in login route:', process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        console.log('Generated token:', token);
        console.log('JWT_SECRET_KEY (Render):', process.env.JWT_SECRET_KEY);
        if (!token) {
            return res.status(500).json({ message: 'Token generation failed' });
        }
        return res.json({ token });
    }
    catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};
const router = Router();
// POST /auth/login - Login a user
router.post('/login', login);
export default router;
