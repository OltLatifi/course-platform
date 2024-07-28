import { Router } from 'express';
import { validateBody } from "../middlewares/validate"
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

router.post('/register', validateBody(createUserValidator), register);
router.post('/login', validateBody(createUserValidator), login);
router.post('/refresh-token', validateBody(refreshTokenValidator), refresh);
router.get('/profile', authenticate, me);

export default router;
