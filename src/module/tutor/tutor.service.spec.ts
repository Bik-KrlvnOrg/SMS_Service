import {MockType, tutorRepositoryMock} from "../../../test/utils";
import {AddressEntity, SubjectEntity, TutorEntity, UserEntity} from "../../entities";
import {Test, TestingModule} from "@nestjs/testing";
import {TutorController} from "./tutor.controller";
import {TutorService} from "./tutor.service";
import {TutorRepository} from "./repository/tutor.repository";
import tutorJson from '../../../test/testdata/tutor.json'
import {plainToClass} from "class-transformer";
import createTutorJson from '../../../test/testdata/create-tutor.json'
import {CreateTutorDto} from "./dto/create-tutor.dto";
import {BaseRepository} from "typeorm-transactional-cls-hooked";
import tutorsJson from '../../../test/testdata/tutors.json'
import {AssignSubjectDto} from "./dto/assign-subject.dto";
import subjectsJson from '../../../test/testdata/subjects.json'
import {AssignUserDto} from "./dto/assign-user.dto";
import userJson from '../../../test/testdata/user.json'
import {RemoveSubjectDto} from "./dto/remove-subject.dto";
import {RemoveAddressDto} from "./dto/remove-address.dto";
import addressesJson from '../../../test/testdata/addresses.json'


jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));


describe('TutorService', () => {
    let repository: MockType<BaseRepository<TutorEntity>>;
    let tutorEntity: TutorEntity
    let service: TutorService


    beforeEach(async () => {
        tutorEntity = plainToClass(TutorEntity, tutorJson)


        const app: TestingModule = await Test.createTestingModule({
            controllers: [TutorController],
            providers: [TutorService,
                {provide: TutorRepository, useFactory: tutorRepositoryMock},
            ],
        }).compile();

        repository = await app.get(TutorRepository)
        service = await app.get(TutorService)

    });

    describe('Define- dependencies', function () {
        it('TutorRepository - should be defined', function () {
            expect(repository).toBeDefined()
            expect(service).toBeDefined()
        });
    });

    it('Create - should save and return tutor', async () => {
        const dto = plainToClass(CreateTutorDto, createTutorJson)
        expect(await service.create(dto)).toEqual(createTutorJson)
    });

    it('Create - with null dto should throw an error', async () => {
        await expect(service.create(null)).rejects.toThrowError()
    });

    it('GetOne - should return tutor entity', async () => {
        const tutorId = tutorsJson[1].id
        expect(await service.getOne(tutorId)).not.toBeNull()
    });

    it('Get - should return tutor entity', async () => {
        expect(await service.get()).not.toBeNull()
    });

    it('Delete - should return deleted tutor entity', async () => {
        const tutorId = tutorsJson[0].id
        expect(await service.delete(tutorId)).toBeUndefined()
    });

    it('assignSubject - should assign subjects to tutor', async () => {
        const assignSubjectDto = new AssignSubjectDto()
        assignSubjectDto.tutorId = tutorsJson[0].id
        assignSubjectDto.subjects = plainToClass(SubjectEntity, subjectsJson)
        await service.assignSubject(assignSubjectDto)
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(repository.save).toHaveBeenCalledTimes(1)
    });

    it('assignUser - should assign user to tutor', async () => {
        const assignUserDto = new AssignUserDto()
        assignUserDto.tutorId = tutorsJson[0].id
        assignUserDto.user = plainToClass(UserEntity, userJson)
        await service.assignUser(assignUserDto)
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(repository.save).toHaveBeenCalledTimes(1)
    });

    it('removeSubject - should remove subject from tutor', async () => {
        const removeSubjectDto = new RemoveSubjectDto()
        removeSubjectDto.tutorId = tutorsJson[0].id
        removeSubjectDto.subjects = plainToClass(SubjectEntity, subjectsJson)
        await service.removeSubject(removeSubjectDto)
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(repository.save).toHaveBeenCalledTimes(1)
    });

    it('removeAddress - should remove address from tutor', async () => {
        const removeAddressDto = new RemoveAddressDto()
        removeAddressDto.tutorId = tutorsJson[1].id
        removeAddressDto.addresses = plainToClass(AddressEntity, addressesJson)
        await service.removeAddress(removeAddressDto)
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(repository.save).toHaveBeenCalledTimes(1)
    });


});