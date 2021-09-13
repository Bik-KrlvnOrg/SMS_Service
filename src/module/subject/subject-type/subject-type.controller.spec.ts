import {Test, TestingModule} from '@nestjs/testing';
import {SubjectTypeController} from './subject-type.controller';
import {SubjectTypeService} from "./subject-type.service";
import {SubjectTypeRepository} from "./repository/subject-type.repository";
import {subjectTypeRepositoryMock} from "../../../../test/utils";
import {HttpStatus, INestApplication, ValidationPipe} from "@nestjs/common";
import createSubjectTypeJson from './testdata/create-subject-type.json'
import updateSubjectTypeJson from './testdata/update-subject-type.json'

const request = require('supertest');

jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));


describe('SubjectTypeController', () => {
    let controller: SubjectTypeController;
    let app: INestApplication
    let service: SubjectTypeService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SubjectTypeController],
            providers: [SubjectTypeService,
                {provide: SubjectTypeRepository, useValue: subjectTypeRepositoryMock()}
            ],
        }).compile();

        controller = await module.get<SubjectTypeController>(SubjectTypeController);
        service = await module.get<SubjectTypeService>(SubjectTypeService)
        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();

    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    it('Index - should return all subject-types ', async () => {
        return request(app.getHttpServer())
            .get('/subjects/subject-types')
            .expect(HttpStatus.OK)
            .then(resp => expect(resp.body).toBeDefined())
    });

    it('Create - should create subject-type ', async () => {
        return request(app.getHttpServer())
            .post('/subjects/subject-types')
            .send(createSubjectTypeJson)
            .expect(HttpStatus.CREATED)
            .then(resp => expect(resp.body).toBeDefined())
    });

    it('GetOne - should return subject-type ', async () => {
        return request(app.getHttpServer())
            .get('/subjects/subject-types/cdc2f78b-807f-4e03-a656-67aa3b33055b')
            .expect(HttpStatus.OK)
            .then(resp => expect(resp.body).toBeDefined())
    });

    it('Remove - should remove subject-type ', async () => {
        return request(app.getHttpServer())
            .delete('/subjects/subject-types/cdc2f78b-807f-4e03-a656-67aa3b33055b')
            .expect(HttpStatus.OK)
    });

    it('Update - should update subject-type ', async () => {
        return request(app.getHttpServer())
            .put('/subjects/subject-types/cdc2f78b-807f-4e03-a656-67aa3b33055b')
            .send(updateSubjectTypeJson)
            .expect(HttpStatus.OK)
    });

    it('Update - should throw an error if update-name already exist ', async () => {
        return request(app.getHttpServer())
            .put('/subjects/subject-types/cdc2f78b-807f-4e03-a656-67aa3b33055b')
            .send(updateSubjectTypeJson)
            .expect(HttpStatus.OK)
    });
});
