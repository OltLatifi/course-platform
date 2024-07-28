import { checkSchema } from 'express-validator';

export const chapterIdParamValidator = checkSchema({
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: 'Chapter ID must be an integer',
  },
});
