import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config, TypeOrmConfigService } from './libs';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './module/student/student.module';
import { getConnectionOptions } from 'typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    StudentModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
