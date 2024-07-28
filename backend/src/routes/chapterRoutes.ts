import { Router } from 'express';
import { createChapter, getChapter, updateChapter, deleteChapter } from '../controllers/chapterController';
import { validate } from '../middlewares/validate';
import { createChapterValidator, updateChapterValidator, chapterIdParamValidator } from '../validation';

const router = Router();

router.post('/chapters', validate(createChapterValidator), createChapter);
router.get('/chapters/:id', validate(chapterIdParamValidator), getChapter);
router.put('/chapters/:id', validate(updateChapterValidator), updateChapter);
router.delete('/chapters/:id', validate(chapterIdParamValidator), deleteChapter);

export default router;
