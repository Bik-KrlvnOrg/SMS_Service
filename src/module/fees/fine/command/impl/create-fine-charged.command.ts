import { ICommand } from '@nestjs/cqrs'
import { FeesToPayDto } from '../../../dto/fees.dto';

export class CreateFineChargedCommand implements ICommand {
    constructor(public readonly cmd?: FeesToPayDto) { }
}