import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { swaggerConfig } from '@app/account/docs/swaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  app.enableCors();
  app.setGlobalPrefix('/api');

  swaggerConfig(app);

  await app.listen(3333);
}

bootstrap();
