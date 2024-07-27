import Joi from 'joi';

export const courseIdParamValidator = Joi.object({
  id: Joi.number().guid().required(), 
});
