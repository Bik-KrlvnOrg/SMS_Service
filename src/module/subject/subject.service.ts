import {Injectable, UseFilters} from '@nestjs/common';
import {SubjectRepository} from "./repository/subject.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateSubjectDto} from "./dto/create-subject.dto";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {SubjectNotFoundException} from "../../libs/exception/subject-not-found.exception";
import {CustomExceptionFilter} from "../../libs";
import {UpdateSubjectDto} from "./dto/update-subject.dto";

@Injectable()
@UseFilters(CustomExceptionFilter)
export class SubjectService {
    constructor(
        @InjectRepository(SubjectRepository)
        private readonly subjectRepository: SubjectRepository
    ) {
    }

    @Transactional()
    async create(createSubjectDto: CreateSubjectDto) {
        createSubjectDto.name = createSubjectDto.name.trim().toLocaleUpperCase();
        const subject = await this.subjectRepository.findOne({name: createSubjectDto.name});
        if (subject) return subject;
        const subjectEntity = this.subjectRepository.create(createSubjectDto);
        return this.subjectRepository.save(subjectEntity);
    }

    async get() {
        return this.subjectRepository.find({})
    }

    async update(updateSubjectDto: UpdateSubjectDto) {
        const subject = await this.getOne(updateSubjectDto.id);
        subject.name = updateSubjectDto.name.trim().toLocaleUpperCase()
        subject.max_capacity = updateSubjectDto.max_capacity
        return this.subjectRepository.save(subject)
    }

    async getOne(subjectId: string) {
        const subject = await this.subjectRepository.findOne({id: subjectId});
        if (!subject) throw new SubjectNotFoundException(`subjectId: ${subjectId} not found`)
        return subject
    }

    async delete(subjectId: string) {
        const subject = await this.subjectRepository.findOne({id: subjectId});
        if (!subject) throw new SubjectNotFoundException(`subjectId: ${subjectId} not found`)
        await this.subjectRepository.remove(subject)
    }
}
