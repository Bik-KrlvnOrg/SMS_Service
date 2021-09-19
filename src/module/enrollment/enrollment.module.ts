import {Module} from '@nestjs/common';
import {EnrollmentService} from './enrollment.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EnrollmentRepository} from "./repository/enrollment.repository";
import {EnrollmentController} from './enrollment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EnrollmentRepository])],
  providers: [EnrollmentService],
  controllers: [EnrollmentController]
})
export class EnrollmentModule {
}
