import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'
import { z } from 'zod'

const registerSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    role: z.enum(['student', 'moderator']),
});

export const registerUser = async (req, res) => {
    try {
        const { username, password, role } = registerSchema.parse(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword, role });
        return res.status(201).json({
            user,
            message: 'User registered successfully'
        });
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: err,
            message: 'Validation error'
        });

    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, user });
};
