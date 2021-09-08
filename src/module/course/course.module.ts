import {Module} from '@nestjs/common';
import {CourseService} from './course.service';
import {CourseController} from './course.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CourseRepository} from "./repository/course.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([CourseRepository])
    ],
    providers: [CourseService],
    controllers: [CourseController]
})
export class CourseModule {
}
