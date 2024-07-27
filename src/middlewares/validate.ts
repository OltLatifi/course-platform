import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateBody = (validations: any[]) => {
    return [
        ...validations,
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
};

export const validateParams = (validations: any[]) => {
    return [
        ...validations,
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
};
