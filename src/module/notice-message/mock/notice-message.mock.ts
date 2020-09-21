import { AuthType } from "../../../auth/enum/auth.enum"
import { EsNoticeMessages } from "../../../entities/EsNoticeMessages"
import { MessageStatus } from "../../../libs"
import { GetNoticeMessageDto, NoticeMessageDto } from "../dto/notice-message.dto"

export class NoticeMessageMock {

    static getNoticeMessageDto() {
        const dto: NoticeMessageDto = {
            id: 1,
            fromType: 'any from type',
            message: 'any message',
            subject: 'any subject',
            toId: 2,
            toType: 'any to type',
            fromId: 1,
        }
        return dto
    }

    static getNoticeMessageEntity() {
        return this.getNoticeMessageDto() as EsNoticeMessages
    }

    static getNoticeQueryDto() {
        const dto: GetNoticeMessageDto = { fromId: 1, toStatus: MessageStatus.ACTIVE }
        return dto
    }
}
