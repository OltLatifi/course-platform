import { param } from 'express-validator';

export const idParamValidator = [
  param('id').isInt().withMessage('ID must be an integer')
];
