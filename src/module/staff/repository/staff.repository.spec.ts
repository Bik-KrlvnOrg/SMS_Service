import { Test } from "@nestjs/testing";
import { StaffMock } from "../mock/staff.mock";
import { StaffRepository } from "./staff.repository";


describe('Staff Repository', () => {

    let repository: StaffRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [StaffRepository],
        }).compile();

        repository = module.get<StaffRepository>(StaffRepository);
        repository.save = jest.fn()
        repository.create = jest.fn()
        repository.findOne = jest.fn()
    });

    it('should create new staff', async () => {
        const dto = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createStaff(dto)
        expect(expected).toBe(entity)
    })

    it('should get user profile', async () => {
        const dto = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        const expected = await repository.getProfile(dto.id)
        expect(expected).toBe(entity)
    })

    it('should get user by id', async () => {
        const dto = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        await repository.getStaffById(dto.id)
        expect(repository.findOne).toHaveBeenCalledWith({ id: dto.id })
    })

    it('should get user with credentials', async () => {
        const dto = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        await repository.getStaffWithCredential({ username: dto.username, password: dto.password })
        expect(repository.findOne).toHaveBeenCalledWith({ username: dto.username, password: dto.password })
    })

});