import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { from } from 'rxjs';
import { CreateStudentCommand } from './command';
import { AdmissionDto } from './dto';
import { GetStudentProfileQuery } from './query';

@Injectable()
export class StudentService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    async createStudent(data: AdmissionDto) {
        return from(this.commandBus.execute(new CreateStudentCommand(data)))
    }

    async getProfile(userId: number) {
        return from(this.queryBus.execute(new GetStudentProfileQuery(userId)))
    }
}
