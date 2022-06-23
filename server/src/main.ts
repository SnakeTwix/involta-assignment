import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { getViteServer } from './getViteServer';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const vite = await getViteServer();
  app.use(vite.middlewares);

  await app.listen(3000);
}
bootstrap();
