import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateVoucherEntryHandler, DeleteVoucherEntryHandler, UpdateVoucherEntryHandler } from './command';
import { VoucherEntryCreatedHandler, VoucherEntryDeletedHandler, VoucherEntryUpdatedHandler } from './event';
import { VoucherEntryRepository } from './repository';
import { VoucherSagas } from './sagas/voucher.sagas';

const CommandHandlers = [CreateVoucherEntryHandler, UpdateVoucherEntryHandler, DeleteVoucherEntryHandler]
const EventHandlers = [VoucherEntryCreatedHandler, VoucherEntryUpdatedHandler, VoucherEntryDeletedHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([VoucherEntryRepository])],
    providers: [...CommandHandlers, ...EventHandlers, VoucherSagas]
})
export class VoucherModule { }
