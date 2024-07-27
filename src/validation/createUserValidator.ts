import { body } from 'express-validator';

export const createUserValidator = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
];