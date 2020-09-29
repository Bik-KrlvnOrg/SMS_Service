import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { AuthModule } from '../../auth/auth.module';
import { CreateStudentHandler } from './command';
import { StudentCreatedHandler } from './event';
import { StudentRepository } from './repository';
import { GetStudentProfileHandler } from './query';


const CommandHanders = [CreateStudentHandler]
const EventHandlers = [StudentCreatedHandler]
const QueryHandlers = [GetStudentProfileHandler]

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([StudentRepository]), AuthModule],
    providers: [...CommandHanders, ...EventHandlers, ...QueryHandlers, StudentService],
    controllers: [StudentController]
})
export class StudentModule { }
