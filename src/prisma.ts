import { PrismaClient, User as PrismaUser, RefreshToken as PrismaRefreshToken } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
export type User = PrismaUser;
export type RefreshToken = PrismaRefreshToken;
