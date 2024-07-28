import { checkSchema } from 'express-validator';

export const createChapterValidator = checkSchema({
  title: {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Title is required and must be a string',
  },
  content: {
    in: ['body'],
    isString: true,
    notEmpty: true,
    errorMessage: 'Content is required and must be a string',
  },
  courseId: {
    in: ['body'],
    isInt: true,
    toInt: true,
    errorMessage: 'Course ID is required and must be an integer',
  },
});
