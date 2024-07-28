import { Request, Response } from 'express';
import prisma, { User } from '../prisma';

export const createCourse = async (req: Request, res: Response) => {
    const user = req.user!;
    try {
        const { title, description } = req.body;
        const newCourse = await prisma.course.create({
            data: { title, description, userId: user.id },
        });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: 'Error creating course' });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const course = await prisma.course.findUnique({
            where: { id: Number(id) },
        });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        const updatedCourse = await prisma.course.update({
            where: { id: Number(id) },
            data: { title, description },
        });
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: 'Error updating course' });
    }
};


export const deleteCourse = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const course = await prisma.course.findUnique({
            where: { id: Number(id) },
        });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        await prisma.course.delete({
            where: { id: Number(id) },
        });

        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting course' });
    }
};


export const getCourse = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const course = await prisma.course.findUnique({
            where: { id: Number(id) },
        });

        if (!course) {
            res.status(404).json({ error: 'Course not found' });
        }

        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving course' });
    }
};

export const addChapterToCourse = async (req: Request, res: Response) => {
    try {
      const { courseId } = req.params;
      const { title, content } = req.body;
      const chapter = await prisma.chapter.create({
        data: {
          title,
          content,
          courseId: Number(courseId),
        },
      });
      res.status(201).json(chapter);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add chapter to course' });
    }
  };