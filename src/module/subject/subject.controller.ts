import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SubjectService} from "./subject.service";
import {CreateSubjectDto} from "./dto/create-subject.dto";
import {UpdateSubjectDto} from "./dto/update-subject.dto";

@Controller('subjects')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) {
    }

    @Post()
    async create(@Body() createSubjectDto: CreateSubjectDto) {
        return this.subjectService.create(createSubjectDto)
    }

    @Get()
    async index() {
        return this.subjectService.get()
    }

    @Put(':id')
    async update(@Param('id') subjectId: string, @Body() updateSubjectDto: UpdateSubjectDto) {
        updateSubjectDto.id = subjectId
        return this.subjectService.update(updateSubjectDto)
    }

    @Get(':id')
    async getOne(@Param('id') subjectId: string) {
        return this.subjectService.getOne(subjectId)
    }

    @Delete(':id')
    async removeSubject(@Param('id') subjectId: string) {
        return this.subjectService.delete(subjectId)
    }
}
