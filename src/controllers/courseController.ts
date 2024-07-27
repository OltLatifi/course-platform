import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, explanation } = req.body;
    const newCourse = await prisma.course.create({
      data: { title, explanation },
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error creating course' });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, explanation } = req.body;
  
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: { title, explanation },
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating course' });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.course.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
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

    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving course' });
  }
};
