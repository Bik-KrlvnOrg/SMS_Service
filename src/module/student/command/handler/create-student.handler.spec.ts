import { InternalServerErrorException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateStudentHandler } from ".";
import { StudentMock } from "../../mock/student.mock";
import { StudentRepository } from "../../repository";
import { CreateStudentCommand } from "../impl";

// Disable log outputs
const mockFunctions = () => ({
    createAdmission: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('CreateStudentHandler', () => {
    let eventBus: EventBus;
    let repository: StudentRepository
    let handler: CreateStudentHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateStudentHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: StudentRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<StudentRepository>(StudentRepository)
        handler= module.get<CreateStudentHandler>(CreateStudentHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create student', async () => {
        const cmd = StudentMock.getAdmissionDto()
        const entity = StudentMock.getStudentEntity()
        //@ts-ignore
        repository.createAdmission.mockResolvedValue(entity)
        const result = await handler.execute(new CreateStudentCommand(cmd))
        expect(repository.createAdmission).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(result.success).toBe(true)

    });

    it('should throw an an error if create fails', async () => {
        const cmd = StudentMock.getAdmissionDto()
        //@ts-ignore
        repository.createAdmission.mockRejectedValue(new Error('an error occurred'))
        expect(handler.execute(new CreateStudentCommand(cmd))).rejects.toThrowError(InternalServerErrorException)
    });

});
