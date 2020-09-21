import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { ResponseObject } from '../../model/response.model';
import { GetNoticeMessageDto, NoticeMessageDto } from './dto/notice-message.dto';
import { NoticeMessageService } from './notice-message.service';

@Controller('notice-message')
export class NoticeMessageController {
    constructor(private readonly service: NoticeMessageService) { }

    @Post()
    @UseGuards(AuthGuard())
    async createMessage(@GetUser() user: UserEntity, @Body() dto: NoticeMessageDto): Promise<ResponseObject<'data', any>> {
        dto.fromType = user.type
        dto.fromId = user.id
        const result = await this.service.createMessage(dto)
        return { data: { success: true, noticeMessage: result } }
    }

    @Get('recieved')
    @UseGuards(AuthGuard())
    async listRecivedMessage(@GetUser() user: UserEntity, @Query() dto: GetNoticeMessageDto): Promise<ResponseObject<'data', any>> {
        dto.toId = user.id
        dto.toType = user.type
        const result = await this.service.getMessages(dto)
        return { data: { success: true, noticeMessage: result } }
    }
    
    @Get('sent')
    @UseGuards(AuthGuard())
    async listSentMessage(@GetUser() user: UserEntity, @Query() dto: GetNoticeMessageDto): Promise<ResponseObject<'data', any>> {
        dto.fromId = user.id
        dto.fromType = user.type
        const result = await this.service.getMessages(dto)
        return { data: { success: true, noticeMessage: result } }
    }
}
