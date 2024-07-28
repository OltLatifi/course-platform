import { param } from 'express-validator';

export const courseIdParamValidator = [
    param('id')
        .isInt().withMessage('ID must be an integer')
        .toInt() 
];
