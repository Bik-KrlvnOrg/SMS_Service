import { ICommand } from '@nestjs/cqrs'
import { FeesToPayDto } from '../../dto';

export class CreateFeesPaymentCommand implements ICommand {
    constructor(public readonly cmd: FeesToPayDto) { }
}