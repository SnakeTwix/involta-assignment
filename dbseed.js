import data from './mock/data.json';
import { PrismaClient } from '.prisma/client';
const prisma = new PrismaClient();

prisma.person.createMany({
  data,
});

