import { ICommand } from '@nestjs/cqrs'
import { StudentAttandanceDto } from '../../dto';

export class CreateStudentAttendanceCommand implements ICommand {
    constructor(public readonly cmd: StudentAttandanceDto) { }
}