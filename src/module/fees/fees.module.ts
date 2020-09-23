import { Module } from '@nestjs/common';
import { FeesService } from './fees.service';
import { VoucherModule } from './voucher/voucher.module';
import { FineModule } from './fine/fine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeesMasterRepository, FeesPaidDetailRepository, FeesPaidNewRepository, FeesPaidRepository } from './repository';
import { FeesController } from './fees.controller';
import { FeesPaidCreatedHandler, FeesPaidDetailCreatedHandler, FeesPaymentCreatedHandler } from './event';
import { CreateFeesPaidDetailHandler, CreateFeesPaidHandler, CreateFeesPaymentHandler } from './command';
import { CqrsModule } from '@nestjs/cqrs';
import { FeesSagas } from './sagas/fees.sagas';
import { AuthModule } from '../../auth/auth.module';

const CommandHandlers = [
  CreateFeesPaidHandler,
  CreateFeesPaymentHandler,
  CreateFeesPaidDetailHandler
]

const EventHandlers = [
  FeesPaymentCreatedHandler,
  FeesPaidDetailCreatedHandler,
  FeesPaidCreatedHandler
]

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature(
      [
        FeesMasterRepository,
        FeesPaidRepository,
        FeesPaidNewRepository,
        FeesPaidDetailRepository
      ]),
    AuthModule, VoucherModule, FineModule],
  providers: [...CommandHandlers, ...EventHandlers, FeesSagas, FeesService],
  controllers: [FeesController]
})
export class FeesModule { }
