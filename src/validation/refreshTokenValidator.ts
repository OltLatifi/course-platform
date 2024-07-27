import { body } from 'express-validator';

export const refreshTokenValidator = [
    body('refreshToken').isString()
];