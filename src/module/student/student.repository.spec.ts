import { Test } from "@nestjs/testing";
import { StudentMock } from "./mock/student.mock";
import { StudentRepository } from "./repository";


describe('Student Repository', () => {

    let repository: StudentRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [StudentRepository],
        }).compile();

        repository = module.get<StudentRepository>(StudentRepository);
        repository.save = jest.fn()
        repository.create = jest.fn()
        repository.findOne = jest.fn()
    });

    it('should create new student', async () => {
        const dto = StudentMock.getAdmissionDto()
        const entity = StudentMock.getStudentEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createAdmission(dto)
        expect(expected).toBe(entity)
    })

    it('should get user profile', async () => {
        const dto = StudentMock.getAdmissionDto()
        const entity = StudentMock.getStudentEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        const expected = await repository.getProfile(dto.id)
        expect(expected).toBe(entity)
    })

    it('should get user by id', async () => {
        const dto = StudentMock.getAdmissionDto()
        const entity = StudentMock.getStudentEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        await repository.getStudentById(dto.id)
        expect(repository.findOne).toHaveBeenCalledWith({ id: dto.id })
    })

    it('should get user with credentials', async () => {
        const dto = StudentMock.getAdmissionDto()
        const entity = StudentMock.getStudentEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        await repository.getStudentWithCredential({ username: dto.username, password: dto.password })
        expect(repository.findOne).toHaveBeenCalledWith({ username: dto.username, password: dto.password })
    })

});