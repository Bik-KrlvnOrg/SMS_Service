import {Test, TestingModule} from '@nestjs/testing';
import {SubjectTypeService} from './subject-type.service';
import {SubjectTypeRepository} from "./repository/subject-type.repository";
import {subjectTypeRepositoryMock} from "../../../../test/utils";
import createSubjectTypeJson from './testdata/create-subject-type.json'
import {plainToClass} from "class-transformer";
import {CreateSubjectTypeDto} from "./dto/create-subject-type.dto";
import updateSubjectTypeJson from './testdata/update-subject-type.json'
import {UpdateSubjectTypeDto} from "./dto/update-subject-type.dto";


jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));


describe('SubjectTypeService', () => {
    let service: SubjectTypeService;
    let repository: SubjectTypeRepository

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SubjectTypeService,
                {provide: SubjectTypeRepository, useValue: subjectTypeRepositoryMock()}
            ],
        }).compile();

        service = module.get<SubjectTypeService>(SubjectTypeService);
        repository = module.get<SubjectTypeRepository>(SubjectTypeRepository)
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(repository).toBeDefined();
    });

    it('Create - should create new subject-type', async () => {
        const createSubjectTypeDto = plainToClass(CreateSubjectTypeDto, createSubjectTypeJson);
        createSubjectTypeDto.name = "Other"
        const subjectType = await service.create(createSubjectTypeDto);
        expect(subjectType).toBeDefined()
    });

    it('Create - name already exist return subject-type', async () => {
        const createSubjectTypeDto = plainToClass(CreateSubjectTypeDto, createSubjectTypeJson);
        createSubjectTypeDto.name = "CORE"
        const subjectType = await service.create(createSubjectTypeDto);
        expect(subjectType).toBeDefined()
    });

    it('Get - should return all subject-types', async () => {
        const subjectTypes = await service.get()
        expect(subjectTypes).toBeDefined()
    });

    it('GetOne - should subject-types', async () => {
        const subjectType = await service.getOne('cdc2f78b-807f-4e03-a656-67aa3b33055b')
        expect(subjectType).toBeDefined()
    });

    it('Remove - should remove subject-types', async () => {
        await expect(service.delete('cdc2f78b-807f-4e03-a656-67aa3b33055b')).toBeDefined()
    });

    it('GetOne - should throw an error if subject-type not found', async () => {
        await expect(service.getOne('1')).rejects.toThrowError()
    });

    it('Delete - should throw an error if subject-type not found', async () => {
        await expect(service.delete('1')).rejects.toThrowError()
    });

    it('Update - should update subject-type', async () => {
        const updateSubjectTypeDto = plainToClass(UpdateSubjectTypeDto, updateSubjectTypeJson);
        updateSubjectTypeDto.subjectTypeId = 'cdc2f78b-807f-4e03-a656-67aa3b33055b'
        const subjectType = await service.update(updateSubjectTypeDto)
        expect(subjectType).toBeDefined()
    });

    it('Update - should throw error when update name is already taken', async () => {
        const updateSubjectTypeDto = plainToClass(UpdateSubjectTypeDto, updateSubjectTypeJson);
        updateSubjectTypeDto.name = "ELECTIVE"
        updateSubjectTypeDto.subjectTypeId = 'cdc2f78b-807f-4e03-a656-67aa3b33055b'
        await expect(service.update(updateSubjectTypeDto)).rejects.toThrowError()
    });
});
