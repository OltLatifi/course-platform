import { Request, Response } from 'express';
import prisma from '../prisma';

export const createSection = async (req: Request, res: Response) => {
  try {
    const { name, photo, lectureId } = req.body;
    const section = await prisma.section.create({
      data: { name, photo, lectureId }
    });
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create section' });
  }
};

export const getSections = async (req: Request, res: Response) => {
  try {
    const { lectureId } = req.params;
    const sections = await prisma.section.findMany({
      where: { lectureId: Number(lectureId) }
    });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sections' });
  }
};

export const getSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const section = await prisma.section.findUnique({
      where: { id: Number(id) }
    });
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch section' });
  }
};

export const updateSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const section = await prisma.section.update({
      where: { id: Number(id) },
      data: { name, photo }
    });
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update section' });
  }
};

export const deleteSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.section.delete({
      where: { id: Number(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete section' });
  }
};
