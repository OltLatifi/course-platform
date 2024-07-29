import { body } from 'express-validator';

export const createLectureValidator = [
  body('title').isString().notEmpty(),
  body('content').isString().notEmpty(),
  body('chapterId').isInt(),
];