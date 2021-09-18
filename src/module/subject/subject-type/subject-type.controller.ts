import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SubjectTypeService} from "./subject-type.service";
import {CreateSubjectTypeDto} from "./dto/create-subject-type.dto";
import {UpdateSubjectTypeDto} from "./dto/update-subject-type.dto";

@Controller('subjects/subject-types')
export class SubjectTypeController {
    constructor(private readonly subjectTypeService: SubjectTypeService) {
    }

    @Get('/all')
    async index() {
        return this.subjectTypeService.get()
    }

    @Get(':id')
    async getOne(@Param('id') subjectTypeId: string) {
        return this.subjectTypeService.getOne(subjectTypeId)
    }

    @Post()
    async create(@Body() createSubjectTypeDto: CreateSubjectTypeDto) {
        return this.subjectTypeService.create(createSubjectTypeDto)
    }

    @Delete(':id')
    async delete(@Param('id') subjectTypeId: string) {
        return this.subjectTypeService.delete(subjectTypeId)
    }

    @Put(':id')
    async update(@Param('id') subjectTypeId: string, @Body() updateSubjectTypeDto: UpdateSubjectTypeDto) {
        updateSubjectTypeDto.subjectTypeId = subjectTypeId
        return this.subjectTypeService.update(updateSubjectTypeDto)
    }
}
