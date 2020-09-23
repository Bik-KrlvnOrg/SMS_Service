import { Repository, EntityRepository } from "typeorm";
import { FeePaidNewDetailsEntity as FeesPaidDetailEntity } from "../../../entities/EsFeepaidNewDetails";
import { FeesPaidDetailDto } from "../dto";

@EntityRepository(FeesPaidDetailEntity)
export class FeesPaidDetailRepository extends Repository<FeesPaidDetailEntity>{

    async createFeesPaidNewDetail(data: FeesPaidDetailDto): Promise<FeesPaidDetailEntity> {
        const dto: Omit<FeesPaidDetailDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)
    }
}