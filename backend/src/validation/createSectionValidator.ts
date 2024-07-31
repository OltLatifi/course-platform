import { body } from 'express-validator';

export const createSectionValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('photo').optional().isString().withMessage('Photo must be a string'),
  body('lectureId').isInt().withMessage('Lecture ID must be an integer')
];
