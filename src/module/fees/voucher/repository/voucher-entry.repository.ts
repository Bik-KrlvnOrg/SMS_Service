import { InternalServerErrorException, Logger } from "@nestjs/common";
import { Repository, EntityRepository } from "typeorm";
import { VoucherEntryEntity } from "../../../../entities/EsVoucherentry";
import { VoucherEntryDto } from "../dto";

@EntityRepository(VoucherEntryEntity)
export class VoucherEntryRepository extends Repository<VoucherEntryEntity>{
    logger = new Logger(this.constructor.name)
    async createVoucherEntry(data: VoucherEntryDto): Promise<VoucherEntryEntity> {
        console.log('dto',data)
        try {
            const dto: Omit<VoucherEntryDto, 'id'> = data
            const entity = this.create(dto)
            return this.save(entity)
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }
}