import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentRepository } from "../../repository";
import { GetStudentProfileQuery } from "../impl";
import { StudentEntity } from "../../../../entities/EsPreadmission";

@QueryHandler(GetStudentProfileQuery)
export class GetStudentProfileHandler implements IQueryHandler<GetStudentProfileQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StudentRepository)
        private readonly studentRepository: StudentRepository,
    ) { }

    async execute(query: GetStudentProfileQuery): Promise<StudentEntity> {
        this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
        const { request } = query
        const profile = await this.studentRepository.getProfile(request)
        if (!profile) throw new NotFoundException('profile not found')
        return profile
    }

}