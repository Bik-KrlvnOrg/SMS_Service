import { Repository, EntityRepository } from "typeorm";
import { FineMasterEntity } from "../../../../entities/EsFineMaster";

@EntityRepository(FineMasterEntity)
export class FineMasterRepository extends Repository<FineMasterEntity>{

    async createFineMaster(data: any): Promise<FineMasterEntity> {
        return null;
    }
}