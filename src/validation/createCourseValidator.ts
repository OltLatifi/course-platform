import { body } from 'express-validator';

export const createCourseValidator = [
    body('name')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 100 }).withMessage('Name must be between 3 and 100 characters')
        .notEmpty().withMessage('Name is required'),
    body('description')
        .isString().optional().withMessage('Description must be a string')
];
