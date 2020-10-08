import { InternalServerErrorException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateStaffHandler } from ".";
import { StaffMock } from "../../mock/staff.mock";
import { StaffRepository } from "../../repository";
import { CreateStaffCommand } from "../impl";

const mockFunctions = () => ({
    createStaff: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('CreateStaffHandler', () => {
    let eventBus: EventBus;
    let repository: StaffRepository
    let handler: CreateStaffHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateStaffHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: StaffRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<StaffRepository>(StaffRepository)
        handler = module.get<CreateStaffHandler>(CreateStaffHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create staff', async () => {
        const cmd = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.createStaff.mockResolvedValue(entity)
        const result = await handler.execute(new CreateStaffCommand(cmd))
        expect(repository.createStaff).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(result).toBe(entity)
    });
    it('should throw an internal error if save staff fail', async () => {
        const cmd = StaffMock.getStaffDto()
        const entity = StaffMock.getStaffEntity()
        //@ts-ignore
        repository.createStaff.mockRejectedValue(new Error())
        expect(handler.execute(new CreateStaffCommand(cmd))).rejects.toThrow(InternalServerErrorException)
    });


});
