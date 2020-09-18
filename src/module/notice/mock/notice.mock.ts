import { EsNotice } from "../../../entities/EsNotice";
import { NoticeDto } from "../dto/notice.dto";

export class NoticeMock {
   static getNoticeDto() {
        const dto: NoticeDto = { id: 1, message: 'any message', subject: 'any subject', title: 'any title' }
        return dto
    }

    static getNoticeEntity(){
        return this.getNoticeDto() as EsNotice
    }
}