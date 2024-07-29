import { Router } from 'express';
import { createLecture, getLectures, getLectureById, updateLecture, deleteLecture } from '../controllers/lectureController';
import { validate } from '../middlewares/validate';
import { createLectureValidator, updateLectureValidator, lectureIdParamValidator } from '../validation';

const router = Router();

router.post('/', validate(createLectureValidator), createLecture);
router.get('/', getLectures);
router.get('/:id', validate(lectureIdParamValidator), getLectureById);
router.put('/:id', validate(updateLectureValidator), updateLecture);
router.delete('/:id', validate(lectureIdParamValidator), deleteLecture);

export default router;
