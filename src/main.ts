import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log'],
  });
  await app.listen(config.port);

  console.log(`server running at http://127.0.0.1:${config.port}`);
}
bootstrap();
