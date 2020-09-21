import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EsNoticeMessages } from '../../entities/EsNoticeMessages';
import { GetNoticeMessageDto, NoticeMessageDto } from './dto/notice-message.dto';
import { NoticeMessageRepository } from './repository/notice-message.repository';

@Injectable()
export class NoticeMessageService {
    constructor(
        @InjectRepository(NoticeMessageRepository)
        private readonly repository: NoticeMessageRepository) { }

    async createMessage(data: NoticeMessageDto): Promise<EsNoticeMessages> {
        return this.repository.createMessage(data)
    }

    async getMessages(data: GetNoticeMessageDto): Promise<EsNoticeMessages[]> {
        return this.repository.find(data)
    }
}
