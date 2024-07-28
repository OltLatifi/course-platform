import { body } from 'express-validator';

export const createCourseValidator = [
    body('title')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters')
        .notEmpty().withMessage('Title is required'),
    body('description')
        .isString()
];
