import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeService } from './notice.service';
import { NoticeRepository } from './repository/notice.repository';
import { NoticeController } from './notice.controller';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeRepository]), AuthModule],
  providers: [NoticeService],
  controllers: [NoticeController]
})
export class NoticeModule { }
