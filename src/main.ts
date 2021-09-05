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
import {SeedService} from "./module/seed/seed.service";
import {SeedModule} from "./module/seed/seed.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService)
  const seedService = app.get(SeedService)
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

  await seedService.seed()
  const port = configService.get<number>('port')
  await app.listen(port);
}
bootstrap();
