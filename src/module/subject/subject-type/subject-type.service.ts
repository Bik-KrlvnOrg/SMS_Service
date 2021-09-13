import {Injectable} from '@nestjs/common';
import {SubjectTypeRepository} from "./repository/subject-type.repository";
import {CreateSubjectTypeDto} from "./dto/create-subject-type.dto";
import {SubjectTypeNotFoundException} from "../../../libs/exception/subject-type-not-found.exception";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {UpdateSubjectTypeDto} from "./dto/update-subject-type.dto";
import {SubjectTypeExistException} from "../../../libs/exception/subject-type-exist.exception";

@Injectable()
export class SubjectTypeService {
    constructor(private readonly subjectTypeRepository: SubjectTypeRepository) {
    }

    @Transactional()
    async create(createSubjectTypeDto: CreateSubjectTypeDto) {
        createSubjectTypeDto.name = createSubjectTypeDto.name.trim().toUpperCase()
        const subjectType = await this.checkSubjectTypeName(createSubjectTypeDto.name)
        if (subjectType) return subjectType
        const subjectTypeEntity = this.subjectTypeRepository.create(createSubjectTypeDto);
        return this.subjectTypeRepository.save(subjectTypeEntity)
    }

    async get() {
        return this.subjectTypeRepository.find({})
    }

    async getOne(subjectTypeId: string) {
        const subjectType = await this.subjectTypeRepository.findOne({id: subjectTypeId})
        if (!subjectType) throw new SubjectTypeNotFoundException(`subject-type-id: ${subjectTypeId} not found`)
        return subjectType
    }

    @Transactional()
    async delete(subjectTypeId: string) {
        const subjectType = await this.getOne(subjectTypeId)
        await this.subjectTypeRepository.remove(subjectType)
    }

    @Transactional()
    async update(updateSubjectTypeDto: UpdateSubjectTypeDto) {
        updateSubjectTypeDto.name = updateSubjectTypeDto.name.trim().toUpperCase()
        const existSubjectType = await this.checkSubjectTypeName(updateSubjectTypeDto.name)

        if (existSubjectType) {
            if (existSubjectType.id != updateSubjectTypeDto.subjectTypeId)
                throw new SubjectTypeExistException(`${updateSubjectTypeDto.name} already exist`)
        }

        const subjectType = await this.getOne(updateSubjectTypeDto.subjectTypeId)
        subjectType.name = updateSubjectTypeDto.name
        subjectType.description = updateSubjectTypeDto.description
        return this.subjectTypeRepository.save(subjectType)
    }

    private async checkSubjectTypeName(name: string) {
        return this.subjectTypeRepository.findOne({name});
    }
}
