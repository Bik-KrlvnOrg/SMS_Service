import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { from } from 'rxjs';
import { FindFeesPaidDto } from './dto';
import { FeesToPayDto } from './dto/fees.dto';
import { GetFeesPaidQuery } from './query';
import { CreateVoucherEntryCommand } from './voucher/command';

@Injectable()
export class FeesService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    async payFees(data: FeesToPayDto) {
        return from(this.commandBus.execute(new CreateVoucherEntryCommand(data)))
    }

    async getStudentFeesPaid(data: FindFeesPaidDto) {
        return from(this.queryBus.execute(new GetFeesPaidQuery(data)))
    }
}
