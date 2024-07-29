import { Router } from 'express';
import { createChapter, getChapter, updateChapter, deleteChapter } from '../controllers/chapterController';
import { validateBody, validateParams } from '../middlewares/validate';
import { createChapterValidator } from '../validation/createChapterValidator';
import { chapterIdParamValidator } from '../validation/chapterIdParamValidator';
import { updateChapterValidator } from '../validation/updateChapterValidator';

const router = Router();

router.post('/chapters', validateBody(createChapterValidator), createChapter);
router.get('/chapters/:id', validateParams(chapterIdParamValidator), getChapter);
router.put('/chapters/:id', validateBody(updateChapterValidator), validateParams(chapterIdParamValidator), updateChapter);
router.delete('/chapters/:id', validateParams(chapterIdParamValidator), deleteChapter);

export default router;
