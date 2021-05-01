import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { ConfigService } from '@nestjs/config';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService)
  app.useGlobalPipes(new ValidationPipe())
  if (configService.get('env') !== 'development') {
    app.useLogger(WinstonModule.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.DailyRotateFile(
          configService.get('winston.dailyFormat')
        )
      ]
    }))
  }

  initializeTransactionalContext() // Initialize cls-hooked
  patchTypeORMRepositoryWithBaseRepository() // patch Repository with BaseRepository.

  const port = configService.get<number>('port')
  await app.listen(port);
}
bootstrap();
