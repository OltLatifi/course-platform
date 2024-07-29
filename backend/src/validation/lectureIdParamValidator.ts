import { param } from 'express-validator';

export const lectureIdParamValidator = [
  param('id').isInt(),
];