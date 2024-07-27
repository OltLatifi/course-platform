import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
mport { ObjectSchema } from 'joi';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export const validate = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
};   

export const validateParams = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
};