import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import routes from './routes';
import prisma from './prisma';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
