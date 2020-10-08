import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StaffRepository } from "../../repository";
import { GetStaffProfileQuery } from "../impl";
import { StaffEntity } from "../../../../entities/EsStaff";

@QueryHandler(GetStaffProfileQuery)
export class GetStaffProfileHandler implements IQueryHandler<GetStaffProfileQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StaffRepository)
        private readonly staffRepository: StaffRepository,
    ) { }

    async execute(query: GetStaffProfileQuery): Promise<StaffEntity> {
        this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
        const { request } = query
        const profile = await this.staffRepository.getProfile(request)
        if (!profile) throw new NotFoundException()
        return profile
    }
}