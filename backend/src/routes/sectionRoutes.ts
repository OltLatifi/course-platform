import { Router } from 'express';
import { validateParams, validateBody } from '../middlewares/validate';
import { createSectionValidator } from '../validation/createSectionValidator';
import { updateSectionValidator } from '../validation/updateSectionValidator';
import { idParamValidator } from '../validation/idParamValidator';

import {
    createSection,
    getSections,
    getSection,
    updateSection,
    deleteSection
} from '../controllers/sectionController';

const router = Router();

router.post('/', validateBody(createSectionValidator), createSection);
router.get('/:lectureId', validateParams(idParamValidator), getSections);
router.get('/section/:id', validateParams(idParamValidator), getSection);
router.put('/section/:id', validateParams(idParamValidator), validateBody(updateSectionValidator), updateSection);
router.delete('/section/:id', validateParams(idParamValidator), deleteSection);

export default router;
