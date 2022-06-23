import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { getViteServer } from './getViteServer';
import { isProduction } from './utils/env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  if (isProduction) {
  } else {
    const vite = await getViteServer();
    app.use(vite.middlewares);
  }

  await app.listen(3000);
}
bootstrap();
