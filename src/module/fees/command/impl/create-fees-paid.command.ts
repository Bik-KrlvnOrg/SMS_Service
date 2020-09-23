import { ICommand } from '@nestjs/cqrs'
import { FeesToPayDto } from '../../dto';

export class CreateFeesPaidCommand implements ICommand {
    constructor(public readonly cmd: FeesToPayDto) { }
}