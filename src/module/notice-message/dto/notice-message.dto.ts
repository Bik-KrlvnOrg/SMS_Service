import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { AuthType } from "../../../auth/enum/auth.enum";
import { ReadStatus, MessageStatus, ReplyStatus } from "../../../libs";

export class GetNoticeMessageDto {
    @IsOptional()
    @IsEnum(AuthType)
    fromType?: AuthType

    @IsOptional()
    @IsEnum(AuthType)
    toType?: AuthType

    @IsOptional()
    @IsEnum(MessageStatus)
    toStatus?: MessageStatus = MessageStatus.ACTIVE

    fromId?: number

    toId?: number
}

export class NoticeMessageDto {
    @IsNumber()
    @IsOptional()
    id: number

    @IsOptional()
    @IsNumber()
    fromId: number

    @IsOptional()
    @IsString()
    fromType: string

    @IsNumber()
    toId: number

    @IsNotEmpty()
    @IsString()
    toType: string

    @IsNotEmpty()
    @IsString()
    subject: string

    @IsNotEmpty()
    @IsString()
    message: string

    repliedMessageId?: number = 0

    readStatus?: ReadStatus = ReadStatus.UN_READ

    toStatus?: MessageStatus = MessageStatus.ACTIVE

    fromStatus?: MessageStatus = MessageStatus.ACTIVE

    status?: MessageStatus = MessageStatus.ACTIVE

    replyStatus?: ReplyStatus = ReplyStatus.NOT_REPLIED

}