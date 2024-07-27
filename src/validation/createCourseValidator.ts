import Joi from 'joi';

export const createCourseValidator = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().optional(),
  
});
