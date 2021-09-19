import {Test, TestingModule} from '@nestjs/testing';
import {EnrollmentService} from './enrollment.service';
import {EnrollmentRepository} from "./repository/enrollment.repository";
import {enrollmentRepositoryMock} from "../../../test/utils";
import createEnrollmentJson from './testdata/create-enrollment.json'
import {plainToClass} from "class-transformer";
import {CreateEnrollmentDto} from "./dto/create-enrollment.dto";

jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));

describe('EnrollmentService', () => {
    let service: EnrollmentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EnrollmentService,
                {
                    provide: EnrollmentRepository, useValue: enrollmentRepositoryMock()
                }
            ],
        }).compile();

        service = module.get<EnrollmentService>(EnrollmentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create student enrollment', async () => {
        const enroll = await service.create(plainToClass(CreateEnrollmentDto, createEnrollmentJson))
        console.log('en', enroll)
        // expect(enroll).toHaveProperty('id')
    });
});
