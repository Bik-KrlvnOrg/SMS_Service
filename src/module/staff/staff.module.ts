import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffRepository } from './repository';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { CreateStaffHandler } from './command';
import { StaffCreatedHandler } from './event';
import { AuthModule } from '../../auth/auth.module';
import { GetStaffProfileHandler } from './query';

const CommandHandlers = [CreateStaffHandler]
const EventHandlers = [StaffCreatedHandler]
const QueryHandlers = [GetStaffProfileHandler]

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([StaffRepository]),
        AuthModule
    ],
    providers: [
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        StaffService],
    controllers: [StaffController]
})
export class StaffModule { }
