import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateFineChargedHandler } from './command';
import { FineChargedCreatedHandler } from './event';
import { FineCollectedRepository, FineMasterRepository } from './repository';

const CommandHandlers = [CreateFineChargedHandler]
const EventHandlers = [FineChargedCreatedHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([FineCollectedRepository, FineMasterRepository])],
    providers: [...CommandHandlers, ...EventHandlers]
})
export class FineModule { }
