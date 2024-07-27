import Joi from 'joi';

export const updateCourseValidator = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  description: Joi.string().optional(),
  
});
