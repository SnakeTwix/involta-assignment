import { PrismaClient } from '@prisma/client';
import { people } from './mock/data';
const prisma = new PrismaClient();

export const load = async () => {
  try {
    await prisma.person.deleteMany();

    await prisma.person.createMany({
      data: people,
    });
    console.log('Added people');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

