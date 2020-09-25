import { Module } from '@nestjs/common';
import { FeesService } from './fees.service';
import { VoucherModule } from './voucher/voucher.module';
import { FineModule } from './fine/fine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeesMasterRepository, FeesPaidDetailRepository, FeesPaidNewRepository, FeesPaidRepository } from './repository';
import { FeesController } from './fees.controller';
import { FeesPaidCreatedHandler, FeesPaidDeletedHandler, FeesPaidDetailCreatedFailedHandler, FeesPaidDetailCreatedHandler, FeesPaidDetailDeletedHandler, FeesPaymentCreatedFailedHandler, FeesPaymentCreatedHandler, FeesPaymentDeletedHandler } from './event';
import { CreateFeesPaidDetailHandler, CreateFeesPaidHandler, CreateFeesPaymentHandler, DeleteFeesPaidDetailHandler, DeleteFeesPaidHandler, DeleteFeesPaymentHandler } from './command';
import { CqrsModule } from '@nestjs/cqrs';
import { FeesSagas } from './sagas/fees.sagas';
import { AuthModule } from '../../auth/auth.module';
import { GetFeesPaidHandler } from './query';
import { FeesPaidCreatedFailsHandler } from './event/handler/fees-paid-created-fails.handler';

const CommandHandlers = [
  CreateFeesPaidHandler,
  CreateFeesPaymentHandler,
  CreateFeesPaidDetailHandler,
  DeleteFeesPaymentHandler,
  DeleteFeesPaidHandler,
  DeleteFeesPaidDetailHandler,
]

const EventHandlers = [
  FeesPaymentCreatedHandler,
  FeesPaidDetailCreatedHandler,
  FeesPaidCreatedHandler,
  FeesPaymentDeletedHandler,
  FeesPaidDetailDeletedHandler,
  FeesPaidDeletedHandler,
  FeesPaymentCreatedFailedHandler,
  FeesPaidDetailCreatedFailedHandler,
  FeesPaidCreatedFailsHandler
]

const QueryHandlers = [
  GetFeesPaidHandler
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
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, FeesSagas, FeesService],
  controllers: [FeesController]
})
export class FeesModule { }
