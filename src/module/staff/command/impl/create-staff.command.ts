import { ICommand } from '@nestjs/cqrs'
import { StaffDto } from '../../dto';

export class CreateStaffCommand implements ICommand {
    constructor(public readonly cmd: StaffDto) { }
}