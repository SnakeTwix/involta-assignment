import { Module } from '@nestjs/common';
import { PrismaModule } from '../Prisma/prisma.module';
import { PrismaService } from '../Prisma/prisma.service';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  imports: [PrismaModule],
  controllers: [PersonController],
  providers: [PersonService, PrismaService],
})
export class PersonModule {}

