import { body } from 'express-validator';

export const createUserValidator = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{8,}$/, "i")
        .withMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.')
];