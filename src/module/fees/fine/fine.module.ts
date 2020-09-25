import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateFineChargedHandler, DeleteFineChargedHandler } from './command';
import { FineChargedCreatedFailedHandler, FineChargedCreatedHandler, FineChargedDeletedHandler } from './event';
import { FineCollectedRepository, FineMasterRepository } from './repository';
import { FineSagas } from './sagas/fine.sagas';

const CommandHandlers = [
    CreateFineChargedHandler,
    DeleteFineChargedHandler
]

const EventHandlers = [
    FineChargedCreatedHandler,
    FineChargedDeletedHandler,
    FineChargedCreatedFailedHandler
]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([FineCollectedRepository, FineMasterRepository])],
    providers: [...CommandHandlers, ...EventHandlers, FineSagas]
})
export class FineModule { }
