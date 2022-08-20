import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ROOT');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  try {
    await app.listen(port);
  } catch (error) {
    logger.error(error);
  }
}
bootstrap();
