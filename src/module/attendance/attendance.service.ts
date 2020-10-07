import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { from, Observable } from 'rxjs';
import { FindOptionsDto } from '../../libs';
import { CreateStaffAttendanceCommand, CreateStudentAttendanceCommand } from './command';
import { StaffAttendanceDto, StudentAttandanceDto } from './dto';
import { GetStaffAttendanceQuery, GetStudentsAttendanceQuery } from './query';

@Injectable()
export class AttendanceService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    createStudentAttendance(data: StudentAttandanceDto): Observable<any> {
        return from(this.commandBus.execute(new CreateStudentAttendanceCommand(data)))
    }

    createStaffAttendance(data: StaffAttendanceDto): Observable<any> {
        return from(this.commandBus.execute(new CreateStaffAttendanceCommand(data)))
    }

    getStudentsAttendance(data: FindOptionsDto): Observable<any> {
        return from(this.queryBus.execute(new GetStudentsAttendanceQuery(data)))
    }

    getStaffAttendance(data: FindOptionsDto): Observable<any> {
        return from(this.queryBus.execute(new GetStaffAttendanceQuery(data)))
    }
}
