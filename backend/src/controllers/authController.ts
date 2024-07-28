import { generateToken, generateRefreshToken, hashPassword, comparePassword } from '../auth';
import { Request, Response } from 'express';
import prisma, { User } from '../prisma';

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        }) as User;

        const token = generateToken(user);
        const refreshToken = await generateRefreshToken(user);
        res.json({ token, refreshToken, user });
    } catch (error) {
        res.status(400).json({ error: 'User already exists' });
    }
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } }) as User;
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    const refreshToken = await generateRefreshToken(user);
    res.json({ token, refreshToken });
}

const refresh = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    const storedToken = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });
    if (!storedToken) {
        return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const user = await prisma.user.findUnique({ where: { id: storedToken.userId } }) as User;
    if (!user) {
        return res.status(401).json({ error: 'Invalid refresh token' });
    }

    if (new Date() > new Date(storedToken.expiresAt)) {
        await prisma.refreshToken.delete({ where: { token: refreshToken } });
        return res.status(401).json({ error: 'Refresh token expired' });
    }

    const token = generateToken(user);
    const newRefreshToken = await generateRefreshToken(user);
    res.json({ token, refreshToken: newRefreshToken });
}

const me = async (req: Request, res: Response) => {
    const user = req.user!;
    const courses = await prisma.course.findMany({
        where: { userId: user.id }
    });
    res.json({ "user": req.user, "courses": courses });
}

export {
    register,
    login,
    refresh,
    me
}