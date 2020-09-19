import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { EsNoticeMessages } from "../../../entities/EsNoticeMessages";
import { NoticeMessageDto } from "../dto/notice-message.dto";

@EntityRepository(EsNoticeMessages)
export class NoticeMessageRepository extends Repository<EsNoticeMessages>{

    async createMessage(data: NoticeMessageDto): Promise<EsNoticeMessages> {
        try {
            const dto: Omit<NoticeMessageDto, 'id'> = data
            const entity = this.create(dto)
            entity.repliedMessageId = 0
            return await this.save(entity)
        } catch (err) {
            throw new InternalServerErrorException(err.message)
        }
    }
}