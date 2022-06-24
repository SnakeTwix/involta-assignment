import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { PrismaService } from './Prisma/prisma.service';
import { load } from '../../prisma/dbseed';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // To prevent prisma from shutting down prematurely. See https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Seeding the database
  load();

  await app.listen(3000);
}
bootstrap();
