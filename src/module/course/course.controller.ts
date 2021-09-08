import {Body, Controller, Delete, Get, Param, Post, Put, UseFilters} from '@nestjs/common';
import {CourseService} from "./course.service";
import {CreateCourseDto} from "./dto/create-course.dto";
import {RemoveSubjectDto} from "./dto/remove-subject.dto";
import {UpdateCourseDto} from "./dto/update-course.dto";
import {CustomExceptionFilter} from "../../libs";

@Controller('courses')
@UseFilters(CustomExceptionFilter)
export class CourseController {
    constructor(private readonly courseService: CourseService) {
    }

    @Post()
    async create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Put(':id')
    async update(@Param('id') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
        updateCourseDto.course_id = courseId
        return this.courseService.update(updateCourseDto);
    }

    @Get()
    async index() {
        return this.courseService.get();
    }

    @Delete("/remove-subject")
    async removeSubject(@Body() removeSubjectDto: RemoveSubjectDto) {
        return this.courseService.removeSubject(removeSubjectDto)
    }

    @Delete(':id')
    async deleteCourse(@Param('id') courseId: string) {
        return this.courseService.delete(courseId)
    }
}
