import { InternalServerErrorException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateStudentAttendanceHandler, CreateStudentAttendanceCommand } from "../../command";
import { StudentAttendanceMock } from "../../mock/student-attendance.mock";
import { StudentAttendanceRepository } from "../../repository";

const mockFunctions = () => ({
    createStudentAttendance: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('CreateStudentAttendance Handler', () => {
    let eventBus: EventBus;
    let repository: StudentAttendanceRepository
    let handler: CreateStudentAttendanceHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateStudentAttendanceHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: StudentAttendanceRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<StudentAttendanceRepository>(StudentAttendanceRepository)
        handler = module.get<CreateStudentAttendanceHandler>(CreateStudentAttendanceHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create student attendance', async () => {
        const cmd = StudentAttendanceMock.getStudentAttendanceDto()
        const entity = StudentAttendanceMock.getStudentAttendanceEntity()
        //@ts-ignore
        repository.createStudentAttendance.mockResolvedValue(entity)
        const result = await handler.execute(new CreateStudentAttendanceCommand(cmd))
        expect(repository.createStudentAttendance).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(result.success).toBe(true)
    });
    it('should throw an error if student attendance command fails', async () => {
        const cmd = StudentAttendanceMock.getStudentAttendanceDto()
        //@ts-ignore
        repository.createStudentAttendance.mockRejectedValue(new Error('an error occurred'))
        expect(handler.execute(new CreateStudentAttendanceCommand(cmd))).rejects.toThrowError(InternalServerErrorException)

    });


});
