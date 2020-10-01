import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { from, Observable } from 'rxjs';
import { CreateStaffAttendanceCommand, CreateStudentAttendanceCommand } from './command';
import { StaffAttendanceDto, StudentAttandanceDto } from './dto';

@Injectable()
export class AttendanceService {
    constructor(private readonly commandBus: CommandBus) { }

    createStudentAttendance(data: StudentAttandanceDto): Observable<any> {
        return from(this.commandBus.execute(new CreateStudentAttendanceCommand(data)))
    }

    createStaffAttendance(data: StaffAttendanceDto): Observable<any> {
        return from(this.commandBus.execute(new CreateStaffAttendanceCommand(data)))
    }
}
