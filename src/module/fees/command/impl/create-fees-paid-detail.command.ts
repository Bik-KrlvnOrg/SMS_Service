import { ICommand } from '@nestjs/cqrs'
import { FeesToPayDto } from '../../dto';

export class CreateFeesPaidDetailCommand implements ICommand {
    constructor(public readonly cmd: FeesToPayDto) { }
}