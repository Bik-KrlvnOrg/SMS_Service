import { Repository, EntityRepository } from "typeorm";
import { FeesMasterEntity } from "../../../entities/EsFeemaster";

@EntityRepository(FeesMasterEntity)
export class FeesMasterRepository extends Repository<FeesMasterEntity>{

    async createFeeMaster(data: any): Promise<FeesMasterEntity> {
        return null;
    }
}