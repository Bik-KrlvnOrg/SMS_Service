import { Repository, EntityRepository } from "typeorm";
import { FeesPaidEntity } from "../../../entities/EsFeepaid";
import { FeesPaidDto } from "../dto";

@EntityRepository(FeesPaidEntity)
export class FeesPaidRepository extends Repository<FeesPaidEntity>{

    async createFeePaid(data: FeesPaidDto): Promise<FeesPaidEntity> {
        const dto: Omit<FeesPaidDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)
    }
}