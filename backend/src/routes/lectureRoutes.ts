import { Router } from 'express';
import { createLecture, getLectures, getLectureById, updateLecture, deleteLecture } from '../controllers/lectureController';
import { validateBody, validateParams } from '../middlewares/validate';
import { createLectureValidator } from '../validation/createLectureValidator';
import { updateLectureValidator } from '../validation/updateLectureValidator';

const router = Router();

router.post('/', validateBody(createLectureValidator), createLecture);
router.get('/', getLectures);
router.get('/:id', validateParams(createLectureValidator), getLectureById);
router.put('/:id', validateParams(updateLectureValidator), validateBody(updateLectureValidator), updateLecture);
router.delete('/:id', validateParams(updateLectureValidator), deleteLecture);


export default router;
