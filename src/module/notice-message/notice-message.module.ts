import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeMessageService } from './notice-message.service';
import { NoticeMessageRepository } from './repository/notice-message.repository';
import { NoticeMessageController } from './notice-message.controller';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeMessageRepository]),AuthModule],
  providers: [NoticeMessageService],
  controllers: [NoticeMessageController]
})
export class NoticeMessageModule { }
