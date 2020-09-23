import { Repository, EntityRepository } from "typeorm";
import { FineCollectedEntity } from "../../../../entities/EsFineChargedCollected";
import { FineCollectedDto } from "../dto/fine-collected.dto";

@EntityRepository(FineCollectedEntity)
export class FineCollectedRepository extends Repository<FineCollectedEntity>{

    async createFineCollected(data: FineCollectedDto): Promise<FineCollectedEntity> {
        const dto: Omit<FineCollectedDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity);
    }
}