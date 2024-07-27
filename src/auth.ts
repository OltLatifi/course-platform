import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import prisma, { User } from './prisma';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = 30; // days

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET,
        },
        async (jwtPayload, done) => {
            try {
                const user = await prisma.user.findUnique({ where: { id: jwtPayload.id } });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                return done(error, false);
            }
        }
    )
);

export const authenticate = passport.authenticate('jwt', { session: false });

export const generateToken = (user: User) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const generateRefreshToken = async (user: User) => {
    const token = crypto.randomBytes(40).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_EXPIRATION);

    await prisma.refreshToken.create({
        data: {
            token,
            userId: user.id,
            expiresAt,
        },
    });

    return token;
};

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
};
