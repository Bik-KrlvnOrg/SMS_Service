import { Repository, EntityRepository } from "typeorm";
import { StaffEntity } from "../../../entities/EsStaff";

@EntityRepository(StaffEntity)
export class StaffRepository extends Repository<StaffEntity>{

    async createStaff(data: Partial<StaffEntity>): Promise<StaffEntity> {
        const entity = this.create(data)
        return this.save(entity);
    }

    async getStaffWithCredential(credential: { username: string, password: string }): Promise<StaffEntity> {
        const { username, password } = credential;
        return this.findOne({ username, password });
    }

    async getStaffById(id: number): Promise<StaffEntity> {
        return this.findOne({ id })
    }

    async getProfile(id: number): Promise<StaffEntity> {
        return this.getStaffById(id);
    }
}