import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './libs';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';
import { NoticeModule } from './module/notice/notice.module';
import { NoticeMessageModule } from './module/notice-message/notice-message.module';
import { FeesModule } from './module/fees/fees.module';


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeOrmConfig), StudentModule, StaffModule, NoticeModule, NoticeMessageModule, FeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
