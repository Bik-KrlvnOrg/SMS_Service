import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceService } from './attendance.service';
import { CreateStaffAttendanceHandler, CreateStudentAttendanceHandler } from './command';
import { StaffAttendanceCreatedHandler, StudentAttendanceCreatedHandler } from './event';
import { StaffAttendanceRepository, StudentAttendanceRepository } from './repository';
import { AttendanceController } from './attendance.controller';
import { AuthModule } from '../../auth/auth.module';
import { GetStaffAttendanceHandler, GetStudentsAttendanceHandler } from './query';

const CommandHandlers = [
    CreateStudentAttendanceHandler,
    CreateStaffAttendanceHandler
]
const EventHandlers = [
    StudentAttendanceCreatedHandler,
    StaffAttendanceCreatedHandler
]
const QueryHandlers = [
    GetStaffAttendanceHandler,
    GetStudentsAttendanceHandler
]
@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([
            StaffAttendanceRepository,
            StudentAttendanceRepository
        ]), AuthModule],
    providers: [
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        AttendanceService
    ],
    controllers: [AttendanceController]
})
export class AttendanceModule { }
