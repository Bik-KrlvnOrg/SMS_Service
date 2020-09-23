import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { from } from 'rxjs';
import { FeesToPayDto } from './dto/fees.dto';
import { CreateVoucherEntryCommand } from './voucher/command';

@Injectable()
export class FeesService {
    constructor(private readonly commandBus: CommandBus) { }

    async payFees(data: FeesToPayDto) {
        return from(this.commandBus.execute(new CreateVoucherEntryCommand(data)))
    }
}
