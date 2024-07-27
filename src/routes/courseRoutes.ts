import { Router } from 'express';
import { validate, validateParams } from '../middleware/validate';
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

router.post('/courses', validate(createCourseValidator), createCourse);

router.put('/courses/:id', validateParams(courseIdParamValidator), validate(updateCourseValidator), updateCourse);

router.delete('/courses/:id', validateParams(courseIdParamValidator), deleteCourse);

router.get('/courses/:id', validateParams(courseIdParamValidator), getCourse);

export default router;
