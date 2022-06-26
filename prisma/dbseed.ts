import { PrismaClient } from '@prisma/client';
const data = require('../../mock/data.json');
const prisma = new PrismaClient();

export const load = async () => {
  try {
    await prisma.person.deleteMany();

    await prisma.person.createMany({
      data,
    });
    console.log('Added people');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

