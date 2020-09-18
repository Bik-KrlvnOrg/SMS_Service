import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResponseObject } from '../../model/response.model';
import { NoticeDto } from './dto/notice.dto';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
    constructor(private readonly noticeService: NoticeService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createNotice(@Body() notice: NoticeDto): Promise<ResponseObject<'data', any>> {
        const result = await this.noticeService.addNotice(notice)
        return { data: { success: true, notice: result } }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Put()
    async updateNotice(@Body() notice: NoticeDto): Promise<ResponseObject<'data', any>> {
        const result = await this.noticeService.updateNotice(notice)
        return { data: { success: true, notice: result } }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getNotice(@Param('id') id: number): Promise<ResponseObject<'data', any>> {
        const result = await this.noticeService.getNotice(id)
        return { data: { success: true, notice: result } }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getNotices(): Promise<ResponseObject<'data', any>> {
        const result = await this.noticeService.getNotices()
        return { data: { success: true, notice: result } }
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteNotice(@Param('id') id: number): Promise<ResponseObject<'data', any>> {
        const result = await this.noticeService.removeNotice(id)
        return { data: { success: true, notice: result } }
    }
}
