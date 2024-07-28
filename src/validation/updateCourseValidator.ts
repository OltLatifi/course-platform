import { body } from 'express-validator';

export const updateCourseValidator = [
    body('name')
        .optional()
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 100 }).withMessage('Name must be between 3 and 100 characters'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string')
];
