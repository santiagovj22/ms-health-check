import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from 'infrastructure/application/nestjs/app.module';

declare const module: any;

async function bootstrap() {
  //const globalPrefix = '/t';
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  await app.setGlobalPrefix('/');

  // Set validation pipe global
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
