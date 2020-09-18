import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoticeDto } from './dto/notice.dto';
import { NoticeRepository } from './repository/notice.repository';

@Injectable()
export class NoticeService {
    constructor(@InjectRepository(NoticeRepository) private readonly noticeRepository: NoticeRepository) { }

    async addNotice(data: NoticeDto) {
        return this.noticeRepository.createNotice(data)
    }

    async updateNotice(data: NoticeDto) {
        const notice = await this.noticeRepository.findOne({ where: { id: data.id } })
        if (!notice) throw new NotFoundException('notice not found')
        const entity = this.noticeRepository.create(data)
        return this.noticeRepository.save(entity)
    }

    async getNotice(id: number) {
        const notice = await this.noticeRepository.findOne({ where: { id } })
        if (!notice) throw new NotFoundException('notice not found')
        return notice
    }

    async removeNotice(id: number) {
        const notice = await this.noticeRepository.findOne({ where: { id } })
        if (!notice) throw new NotFoundException('notice not found')
        const result = await this.noticeRepository.remove(notice)
        return result
    }

    async getNotices() {
        return await this.noticeRepository.find({})
    }
}
