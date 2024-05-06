import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { CustomLogger } from './logger/globalLogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: new CustomLogger(),
  });

  const configService = app.get(ConfigService);

  // data transfer object validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useLogger(new CustomLogger());
  
  // set helmet
  app.use(helmet());

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
