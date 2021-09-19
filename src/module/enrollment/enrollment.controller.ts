import {Body, Controller, Get, Post} from '@nestjs/common';
import {EnrollmentService} from "./enrollment.service";
import {CreateEnrollmentDto} from "./dto/create-enrollment.dto";

@Controller('enrollment')
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) {
    }

    @Post()
    async enroll(@Body() createEnrollmentDto: CreateEnrollmentDto) {
        return this.enrollmentService.create(createEnrollmentDto)
    }

    @Get()
    async index() {
        return this.enrollmentService.index()
    }
}
