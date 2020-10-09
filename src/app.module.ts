import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './libs';
import { NoticeModule } from './module/notice/notice.module';
import { NoticeMessageModule } from './module/notice-message/notice-message.module';
import { FeesModule } from './module/fees/fees.module';
import { StudentModule } from './module/student/student.module';
import { AttendanceModule } from './module/attendance/attendance.module';
import { StaffModule } from './module/staff/staff.module';
import { NotificationModule } from './module/notification/notification.module';


@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    StaffModule,
    NoticeModule,
    NoticeMessageModule,
    FeesModule,
    StudentModule,
    AttendanceModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
