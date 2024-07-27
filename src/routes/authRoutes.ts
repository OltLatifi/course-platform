import { Router } from 'express';
import { validate } from "../middlewares/validate"
import { createUserValidator } from "../validation/createUserValidator"
import { refreshTokenValidator } from "../validation/refreshTokenValidator"
import { authenticate } from '../auth';

import {
    register,
    login,
    refresh,
    me
} from "../controllers/authController"

const router = Router();

router.post('/register', createUserValidator, validate, register);
router.post('/login', createUserValidator, validate, login);

router.post('/refresh-token', refreshTokenValidator, validate, refresh);
router.get('/profile', authenticate, me);

export default router;
