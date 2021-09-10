import {Test, TestingModule} from "@nestjs/testing";
import {TutorController} from "./tutor.controller";
import {TutorService} from "./tutor.service";
import {TutorRepository} from "./repository/tutor.repository";
import {tutorRepositoryMock} from "../../../test/utils";
import {CanActivate, HttpStatus, INestApplication, ValidationPipe} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import createTutorJson from '../../../test/testdata/create-tutor.json'
import {PermissionsGuard} from "../security/guard/permissions.guard";
import {RolesGuard} from "../security/guard";
import removeAddressJson from './testdata/remove-address-tutor.json'
import removeSubjectJson from './testdata/remove-subject.json'
import assignUser from './testdata/assign-user.json'

const request = require('supertest');


jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));

describe('TutorController', () => {
    let controller: TutorController;
    let service: TutorService;
    let app: INestApplication;

    beforeEach(async () => {
        const mockGuard: CanActivate = {canActivate: jest.fn(() => true)};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [TutorController],
            providers: [TutorService,
                {provide: TutorRepository, useFactory: tutorRepositoryMock},
            ],
        })
            .overrideGuard(AuthGuard('jwt'))
            .useValue(mockGuard)
            .overrideGuard(RolesGuard)
            .useValue(mockGuard)
            .overrideGuard(PermissionsGuard)
            .useValue(mockGuard)
            .compile()

        controller = module.get<TutorController>(TutorController);
        service = module.get<TutorService>(TutorService);
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    describe('Define - dependencies', function () {
        it('TutorController - should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('TutorService - should be defined', () => {
            expect(service).toBeDefined();
        });
    });


    it('Index - should return tutor array', async () => {
        return request(app.getHttpServer())
            .get('/tutors')
            .expect(HttpStatus.OK)
    });

    it('GetOne - should return tutor object', async () => {
        return request(app.getHttpServer())
            .get('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9')
            .expect(HttpStatus.OK)
    });

    it('CreateTutor - should return created tutor object', async () => {
        return request(app.getHttpServer())
            .post('/tutors')
            .send(createTutorJson)
            .expect(HttpStatus.CREATED)
    });

    it('AssignSubject - should return created tutor object', async () => {
        return request(app.getHttpServer())
            .post('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9/assign-subject')
            .send(removeSubjectJson)
            .expect(HttpStatus.NO_CONTENT)
    });

    it('AssignUser - should return assign user to tutor', async () => {
        return request(app.getHttpServer())
            .post('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9/assign-user')
            .send(assignUser)
            .expect(HttpStatus.NO_CONTENT)
    });

    it('RemoveSubject - should return created tutor object', async () => {
        return request(app.getHttpServer())
            .delete('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9/remove-subject')
            .send(removeSubjectJson)
            .expect(HttpStatus.OK)
    });

    it('RemoveAddress - should return created tutor object', async () => {
        return request(app.getHttpServer())
            .delete('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9/remove-address')
            .send(removeAddressJson)
            .expect(HttpStatus.OK)
    });

    it('DeleteTutor - should remove tutor', async () => {
        return request(app.getHttpServer())
            .delete('/tutors/dc702447-1be3-4073-8956-ecc13adb66a9')
            .expect(HttpStatus.OK)
    });

});
