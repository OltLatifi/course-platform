import { body } from 'express-validator';

export const updateSectionValidator = [
  body('name').optional().isString().withMessage('Name must be a string'),
  body('photo').optional().isString().withMessage('Photo must be a string')
];
