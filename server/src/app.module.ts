import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { InputModule } from './Input/input.module';
import { PersonModule } from './Person/person.module';
import { PrismaModule } from './Prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client'),
    }),
    InputModule,
    PersonModule,
    PrismaModule,
  ],
})
export class AppModule {}

