import { Router } from 'express';
import { validateParams, validateBody } from '../middlewares/validate';
import { createCourseValidator } from '../validation/createCourseValidator'
import { updateCourseValidator } from '../validation/updateCourseValidator'
import { courseIdParamValidator } from '../validation/courseIdParamValidator'
import { addChapterToCourse } from '../controllers/courseController';
import { validate } from '../middlewares/validate';
import { createChapterValidator } from '../validation/createChapterValidator';

import {
    createCourse,
    updateCourse,
    deleteCourse,
    getCourse
} from '../controllers/courseController';

const router = Router();

router.post('/', validateBody(createCourseValidator), createCourse);
router.put('/:id', validateParams(courseIdParamValidator), validateBody(updateCourseValidator), updateCourse);
router.delete('/:id', validateParams(courseIdParamValidator), deleteCourse);
router.get('/:id', validateParams(courseIdParamValidator), getCourse);
router.post('/courses/:courseId/chapters', validate(courseIdParamValidator), validate(createChapterValidator), addChapterToCourse);

export default router;

