import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateVoucherEntryHandler, UpdateVoucherEntryHandler } from './command';
import { VoucherEntryCreatedHandler, VoucherEntryUpdatedHandler } from './event';
import { VoucherEntryRepository } from './repository';

const CommandHandlers = [CreateVoucherEntryHandler, UpdateVoucherEntryHandler]
const EventHandlers = [VoucherEntryCreatedHandler, VoucherEntryUpdatedHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([VoucherEntryRepository])],
    providers: [...CommandHandlers, ...EventHandlers]
})
export class VoucherModule { }
