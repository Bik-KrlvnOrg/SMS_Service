import { ICommand } from '@nestjs/cqrs'
import { StaffAttendanceDto } from '../../dto';

export class CreateStaffAttendanceCommand implements ICommand {
    constructor(public readonly cmd: StaffAttendanceDto) { }
}