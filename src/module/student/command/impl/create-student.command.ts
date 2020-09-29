import { ICommand } from '@nestjs/cqrs'
import { AdmissionDto } from '../../dto';

export class CreateStudentCommand implements ICommand {
    constructor(public readonly cmd: AdmissionDto) { }
}