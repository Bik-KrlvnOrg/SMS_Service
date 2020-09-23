import { Repository, EntityRepository } from "typeorm";
import { FeePaidNewEntity } from "../../../entities/EsFeepaidNew";
import { FeesNewDto } from "../dto";

@EntityRepository(FeePaidNewEntity)
export class FeesPaidNewRepository extends Repository<FeePaidNewEntity>{

    async createFeePaidNew(data: FeesNewDto): Promise<FeePaidNewEntity> {
        const dto: Omit<FeesNewDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)
    }
}