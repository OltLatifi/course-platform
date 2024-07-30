import 'dotenv/config';
import express from 'express';
import passport from 'passport';

import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes';
import chapterRoutes from './routes/chapterRoutes';
import lectureRoutes from './routes/lectureRoutes';

import { authenticate } from './auth';
import sectionRoutes from './routes/sectionRoutes';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/courses', authenticate, courseRoutes);
app.use('/api/courses/chapters', authenticate, chapterRoutes);
app.use('/api/lectures', authenticate, lectureRoutes);
app.use('/api/sections', sectionRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
