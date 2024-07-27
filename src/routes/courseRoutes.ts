import { Router } from 'express';
import { createCourse, updateCourse, deleteCourse, getCourse } from '../controllers/courseController';

const router = Router();

router.post('/courses', createCourse);

router.put('/courses/:id', updateCourse);

router.delete('/courses/:id', deleteCourse);

router.get('/courses/:id', getCourse);

export default router;
