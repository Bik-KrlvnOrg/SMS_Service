import { Test } from "@nestjs/testing";
import { StudentAttendanceRepository } from ".";
import { StudentAttendanceMock } from "../mock/student-attendance.mock";

describe('StudentAttendance Repository', () => {

    let repository:StudentAttendanceRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [StudentAttendanceRepository],
        }).compile();

        repository = module.get<StudentAttendanceRepository>(StudentAttendanceRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new student attendance', async () => {
        const dto = StudentAttendanceMock.getStudentAttendanceDto()
        const entity = StudentAttendanceMock.getStudentAttendanceEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createStudentAttendance(dto)
        expect(expected).toBe(entity)
    })

});