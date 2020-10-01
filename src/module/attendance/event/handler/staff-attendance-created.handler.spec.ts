import { InternalServerErrorException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateStaffAttendanceHandler, CreateStaffAttendanceCommand } from "../../command";
import { StaffAttendanceMock } from "../../mock/staff-attendance.mock";
import { StaffAttendanceRepository } from "../../repository";

const mockFunctions = () => ({
    createStaffAttendance: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('StaffAttedance Handler', () => {
    let eventBus: EventBus;
    let repository: StaffAttendanceRepository
    let handler: CreateStaffAttendanceHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateStaffAttendanceHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: StaffAttendanceRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<StaffAttendanceRepository>(StaffAttendanceRepository)
        handler = module.get<CreateStaffAttendanceHandler>(CreateStaffAttendanceHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create staff attendance', async () => {
        const cmd = StaffAttendanceMock.getStaffAttendanceDto()
        const entity = StaffAttendanceMock.getStaffAttendanceEntity()
        //@ts-ignore
        repository.createStaffAttendance.mockResolvedValue(entity)
        const result = await handler.execute(new CreateStaffAttendanceCommand(cmd))
        expect(repository.createStaffAttendance).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(result.success).toBe(true)

    });

    it('should throw an error if staff attendance command fails', async () => {
        const cmd = StaffAttendanceMock.getStaffAttendanceDto()
        //@ts-ignore
        repository.createStaffAttendance.mockRejectedValue(new Error('an error occurred'))
        expect(handler.execute(new CreateStaffAttendanceCommand(cmd))).rejects.toThrowError(InternalServerErrorException)

    });


});
