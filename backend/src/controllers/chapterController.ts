import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const createChapter = async (req: Request, res: Response) => {
  try {
    const { title, content, courseId } = req.body;
    const chapter = await prisma.chapter.create({
      data: {
        title,
        content,
        courseId,
      },
    });
    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create chapter' });
  }
};

export const getChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chapter = await prisma.chapter.findUnique({
      where: { id: Number(id) },
    });
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' });
    }
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
};

export const updateChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const chapter = await prisma.chapter.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update chapter' });
  }
};

export const deleteChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.chapter.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete chapter' });
  }
};
