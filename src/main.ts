import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useLogger(WinstonModule.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'sms.log' })
    ]
  }))
  const port = process.env.PORT || 3000
  await app.listen(port);
}
bootstrap();
