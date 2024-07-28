import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes';
import { authenticate } from './auth';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/courses', authenticate, courseRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
