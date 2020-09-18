import { EntityRepository, Repository } from "typeorm";
import { EsNotice } from "../../../entities/EsNotice";
import { NoticeDto } from "../dto/notice.dto";

@EntityRepository(EsNotice)
export class NoticeRepository extends Repository<EsNotice>{

    async createNotice(data: NoticeDto): Promise<EsNotice> {
        const dto: Omit<NoticeDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)

    }
}