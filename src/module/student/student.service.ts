import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { from, Observable } from 'rxjs';
import { StudentEntity } from '../../entities/EsPreadmission';
import { CreateStudentCommand } from './command';
import { AdmissionDto } from './dto';
import { GetStudentProfileQuery } from './query';

@Injectable()
export class StudentService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    async createStudent(data: AdmissionDto) {
        return from(this.commandBus.execute(new CreateStudentCommand(data)))
    }
    
    getProfile(userId: number):Observable<StudentEntity> {
        return from(this.queryBus.execute(new GetStudentProfileQuery(userId)))
    }
}
