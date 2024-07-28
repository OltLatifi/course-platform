import { PrismaClient, User as PrismaUser, RefreshToken as PrismaRefreshToken, Course as PrismaCourse } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
export type { PrismaUser as User, PrismaRefreshToken as RefreshToken, PrismaCourse as Course };