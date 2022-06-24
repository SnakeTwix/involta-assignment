import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputGateway } from './Input/input.gateway';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, InputGateway],
})
export class AppModule {}

