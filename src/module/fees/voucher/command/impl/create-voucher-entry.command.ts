import { ICommand } from '@nestjs/cqrs'
import { FeesToPayDto } from '../../../dto/fees.dto';

export class CreateVoucherEntryCommand implements ICommand {
    constructor(public readonly cmd: FeesToPayDto, public readonly receiptNo?: string) { }
}