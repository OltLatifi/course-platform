import { Request, Response } from 'express';
import prisma from '../prisma';

export const createLecture = async (req: Request, res: Response) => {
  const { title, content, chapterId } = req.body;
  try {
    const lecture = await prisma.lecture.create({
      data: { title, content, chapterId },
    });
    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'Error creating lecture' });
  }
};

export const getLectures = async (req: Request, res: Response) => {
  try {
    const lectures = await prisma.lecture.findMany();
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching lectures' });
  }
};

export const getLectureById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const lecture = await prisma.lecture.findUnique({ where: { id: Number(id) } });
    if (!lecture) return res.status(404).json({ error: 'Lecture not found' });
    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching lecture' });
  }
};

export const updateLecture = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const lecture = await prisma.lecture.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'Error updating lecture' });
  }
};

export const deleteLecture = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.lecture.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting lecture' });
  }
};
