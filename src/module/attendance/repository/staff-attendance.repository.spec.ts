import { Test } from "@nestjs/testing";
import { StaffAttendanceRepository } from ".";
import { StaffAttendanceMock } from "../mock/staff-attendance.mock";

describe('StaffAttendance Repository', () => {

    let repository:StaffAttendanceRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [StaffAttendanceRepository],
        }).compile();

        repository = module.get<StaffAttendanceRepository>(StaffAttendanceRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new staff attendance', async () => {
        const dto = StaffAttendanceMock.getStaffAttendanceDto()
        const entity = StaffAttendanceMock.getStaffAttendanceEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createStaffAttendance(dto)
        expect(expected).toBe(entity) 
    })

});