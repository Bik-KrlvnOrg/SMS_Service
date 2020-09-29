import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './libs';
import { StaffModule } from './staff/staff.module';
import { NoticeModule } from './module/notice/notice.module';
import { NoticeMessageModule } from './module/notice-message/notice-message.module';
import { FeesModule } from './module/fees/fees.module';
import { StudentModule  } from './module/student/student.module';


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeOrmConfig), StaffModule, NoticeModule, NoticeMessageModule, FeesModule,StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
