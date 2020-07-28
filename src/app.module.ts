import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeOrmConfig), StudentModule, StaffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
