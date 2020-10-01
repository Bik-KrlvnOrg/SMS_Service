import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceService } from './attendance.service';
import { CreateStaffAttendanceHandler, CreateStudentAttendanceHandler } from './command';
import { StaffAttendanceCreatedHandler, StudentAttendanceCreatedHandler } from './event';
import { StaffAttendanceRepository, StudentAttendanceRepository } from './repository';
import { AttendanceController } from './attendance.controller';
import { AuthModule } from '../../auth/auth.module';

const CommandHandlers = [CreateStudentAttendanceHandler, CreateStaffAttendanceHandler]
const EventHandlers = [StudentAttendanceCreatedHandler, StaffAttendanceCreatedHandler]

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([
            StaffAttendanceRepository,
            StudentAttendanceRepository
        ]), AuthModule],
    providers: [...CommandHandlers, ...EventHandlers, AttendanceService],
    controllers: [AttendanceController]
})
export class AttendanceModule { }
