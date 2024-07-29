import { body } from 'express-validator';

export const updateLectureValidator = [
  body('title').optional().isString().notEmpty(),
  body('content').optional().isString().notEmpty(),
];