import { checkSchema } from 'express-validator';

export const updateChapterValidator = checkSchema({
  title: {
    in: ['body'],
    isString: true,
    optional: true,
    errorMessage: 'Title must be a string',
  },
  content: {
    in: ['body'],
    isString: true,
    optional: true,
    errorMessage: 'Content must be a string',
  },
});
