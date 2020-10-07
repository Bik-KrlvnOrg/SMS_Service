import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StaffAttendanceRepository } from "../../repository";
import { GetStaffAttendanceQuery } from "../impl";
import { transformObject } from "../../../../libs";

@QueryHandler(GetStaffAttendanceQuery)
export class GetStaffAttendanceHandler implements IQueryHandler<GetStaffAttendanceQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StaffAttendanceRepository)
        private readonly attendanceRepository: StaffAttendanceRepository,
    ) { }

    async execute(query: GetStaffAttendanceQuery): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const { staffId, createdOn, departmentId, sort, ...options } = request
            const params: Record<string, any> = { staffId, departmentId, createdOn }
            const where = transformObject(params)
            const attendance = await this.attendanceRepository.find({ where, order: { id: sort }, ...options })
            return attendance
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }

}