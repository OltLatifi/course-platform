import { Router } from 'express';
import { validate, validateParams } from '../middlewares/validate';
import {
  createCourseValidator,
  updateCourseValidator,
  courseIdParamValidator
} from '../validation';
import {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourse
} from '../controllers/courseController';

const router = Router();

router.post('/courses', validateBody(createCourseValidator), createCourse);

router.put('/courses/:id', validateParams(courseIdParamValidator), validateBody(updateCourseValidator), updateCourse);

router.delete('/courses/:id', validateParams(courseIdParamValidator), deleteCourse);

router.get('/courses/:id', validateParams(courseIdParamValidator), getCourse);

export default router;

