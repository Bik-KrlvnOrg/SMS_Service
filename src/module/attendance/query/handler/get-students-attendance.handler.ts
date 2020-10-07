import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetStudentsAttendanceQuery } from "../impl";
import { StudentAttendanceRepository } from "../../repository";
import { transformObject } from "../../../../libs";

@QueryHandler(GetStudentsAttendanceQuery)
export class GetStudentsAttendanceHandler implements IQueryHandler<GetStudentsAttendanceQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StudentAttendanceRepository)
        private readonly attendanceRepository: StudentAttendanceRepository,
    ) { }

    async execute(query: GetStudentsAttendanceQuery): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const { createdOn, studentId, classId, sort, ...options } = request
            const params: Record<string, any> = { createdOn, studentId, classId }
            const where = transformObject(params)
            const attendance = await this.attendanceRepository.find({ where, order: { id: sort }, ...options })
            return attendance
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }

}