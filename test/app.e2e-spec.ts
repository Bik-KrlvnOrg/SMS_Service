import {Test, TestingModule} from "@nestjs/testing";
import {AppModule} from "../src/app.module";
import {SeedService} from "../src/module/seed/seed.service";
import {
    initializeTransactionalContext,
    patchTypeORMRepositoryWithBaseRepository
} from "typeorm-transactional-cls-hooked";
import {INestApplication, ValidationPipe} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {CourseEntity, SubjectEntity, TutorEntity} from "../src/entities";

const request = require('supertest')

describe('SMS-SERVICE - e2e', function () {
    let app: INestApplication;
    let accessToken: string

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
            ],
        }).compile();

        initializeTransactionalContext() // Initialize cls-hooked
        patchTypeORMRepositoryWithBaseRepository() // patch Repository with BaseRepository.

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        const seedService = app.get(SeedService)

        await seedService.seed()
        await app.init();

        // Authenticate Admin
        return request(app.getHttpServer())
            .post('/users/login')
            .send({
                username: "admin",
                password: "admin"
            })
            .expect(200)
            .then(resp => {
                accessToken = `Bearer ${resp.body.accessToken}`
            })


    });


    describe('USERS', () => {
        it('/users/test - GET', async () => {
            return request(app.getHttpServer())
                .get('/users/test')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('test', resp.body))
        });
    });

    describe('ROLES', () => {
        it('/roles/permissions/all - GET', async () => {
            return request(app.getHttpServer())
                .get('/roles/permissions/all')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('permissions', resp.body))
        });

        it('/roles - GET', async () => {
            return request(app.getHttpServer())
                .get('/roles/permissions/all')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('roles', resp.body))
        });
    });

    describe('COURSES', () => {
        let createCourse = {}
        it('/courses - POST', async () => {
            await request(app.getHttpServer())
                .post('/courses')
                .set('Authorization', accessToken)
                .send({
                    "name": "General_Science",
                    "code": "GEN-SCI-001",
                    "capacity": 1000,
                    "subjects": [
                        {
                            "name": "English",
                            "max_capacity": 200
                        }
                    ]
                })
                .expect(201)
                .then(resp => {
                    console.log('courses-create', resp.body)
                    createCourse = resp.body
                })
            expect(createCourse).toHaveProperty('id')
        });

        it('/courses - GET', async () => {
            return request(app.getHttpServer())
                .get('/courses')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('courses', resp.body))
        });

        it('/courses/{id} - GET', async () => {
            const courseEntity = plainToClass(CourseEntity, createCourse);
            const url = `/courses/${courseEntity.id}`;
            return request(app.getHttpServer())
                .get(url)
                .set('Authorization', accessToken)
                .send(courseEntity)
                .expect(200)
                .then(resp => console.log('courses-id', resp.body))
        });

        it('/courses - PUT', async () => {
            const courseEntity = plainToClass(CourseEntity, createCourse);
            courseEntity.name = "update"
            const url = `/courses/${courseEntity.id}`;
            return request(app.getHttpServer())
                .put(url)
                .set('Authorization', accessToken)
                .send(courseEntity)
                .expect(200)
                .then(resp => console.log('courses-updated', resp.body))
        });

        it('/courses - DELETE', async () => {
            const courseEntity = plainToClass(CourseEntity, createCourse);
            const url = `/courses/${courseEntity.id}`;
            return request(app.getHttpServer())
                .delete(url)
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('courses - delete', resp.body))
        });
    });

    describe('SUBJECTS', () => {
        let createSubject = {}
        it('/subjects - POST', async () => {
            return request(app.getHttpServer())
                .post('/subjects')
                .set('Authorization', accessToken)
                .send({
                    "name": "MATHEMATICS",
                    "max_capacity": 200
                })
                .expect(201)
                .then(resp => {
                    console.log('subjects - create', resp.body)
                    createSubject = resp.body
                })

        });

        it('/subjects - GET', async () => {
            return request(app.getHttpServer())
                .get('/subjects')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('subjects', resp.body))

        });

        it('/subjects/{id} - GET', async () => {
            const subjectEntity = plainToClass(SubjectEntity, createSubject);
            const url = `/subjects/${subjectEntity.id}`;
            return request(app.getHttpServer())
                .get(url)
                .set('Authorization', accessToken)
                .send(subjectEntity)
                .expect(200)
                .then(resp => console.log('subjects-id', resp.body))
        });

        it('/subjects - PUT', async () => {
            const subjectEntity = plainToClass(SubjectEntity, createSubject);
            subjectEntity.name = "update"
            const url = `/subjects/${subjectEntity.id}`;
            return request(app.getHttpServer())
                .put(url)
                .set('Authorization', accessToken)
                .send(subjectEntity)
                .expect(200)
                .then(resp => console.log('subjects-updated', resp.body))
        });

        it('/subjects - DELETE', async () => {
            const subjectEntity = plainToClass(SubjectEntity, createSubject);
            const url = `/subjects/${subjectEntity.id}`;
            return request(app.getHttpServer())
                .delete(url)
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('subject -delete', resp.body))
        });
    });

    describe('TUTORS', () => {
        let createTutor = {}
        it('/tutors - POST', async () => {
            return request(app.getHttpServer())
                .post('/tutors')
                .set('Authorization', accessToken)
                .send({
                    "first_name": "Christopher",
                    "middle_name": "R",
                    "last_name": "Tanner",
                    "contact": "585-613-0001",
                    "email": "o1vxudmg12n@temporary-mail.net",
                    "gender": "male",
                    "dob": "2/11/1995",
                    "addresses": [
                        {
                            "city": "WEST BRANCH",
                            "stateOrProvince": "Iowa",
                            "country": "USA",
                            "street": "1060 James Street"

                        }
                    ]
                })
                .expect(201)
                .then(resp => {
                    console.log('tutors - create', resp.body)
                    createTutor = resp.body
                })

        });

        it('/tutors - GET', async () => {
            return request(app.getHttpServer())
                .get('/tutors')
                .set('Authorization', accessToken)
                .expect(200)
                .then(resp => console.log('tutors', resp.body))

        });

        it('/tutors/{id}/assign-subject - POST', async () => {
            const tutorEntity = plainToClass(TutorEntity, createTutor);
            const url = `/tutors/${tutorEntity.id}/assign-subject`;
            return request(app.getHttpServer())
                .post(url)
                .set('Authorization', accessToken)
                .send({
                    "subjects": [
                        {
                            "name": "General_Science",
                            "max_capacity": 200
                        }
                    ]
                })
                .expect(204)
                .then(resp => console.log('tutors-assign-subject', resp.body))
        });

        it('/tutors/{id} - GET', async () => {
            const tutorEntity = plainToClass(TutorEntity, createTutor);
            const url = `/tutors/${tutorEntity.id}`;
            return request(app.getHttpServer())
                .get(url)
                .set('Authorization', accessToken)
                .send(tutorEntity)
                .expect(200)
                .then(resp => {
                    console.log('tutors-id', resp.body)
                    createTutor = resp.body
                })
        });

        it('/tutors/{id}/remove-address - DELETE', async () => {
            const tutorEntity = plainToClass(TutorEntity, createTutor);
            const addresses = {
                addresses: tutorEntity.addresses
            }
            const url = `/tutors/${tutorEntity.id}/remove-address`;
            return request(app.getHttpServer())
                .delete(url)
                .set('Authorization', accessToken)
                .send(addresses)
                .expect(204)
                .then(resp => console.log('tutors-remove-address', resp.body))
        });

        it('/tutors/{id}/remove-subject - DELETE', async () => {
            const tutorEntity = plainToClass(TutorEntity, createTutor);
            const subjects = {
                subjects: tutorEntity.subjects
            }
            const url = `/tutors/${tutorEntity.id}/remove-subject`;
            return request(app.getHttpServer())
                .delete(url)
                .set('Authorization', accessToken)
                .send(subjects)
                .expect(204)
                .then(resp => console.log('tutors-remove-subject', resp.body))
        });

        it('/tutors/{id} - DELETE', async () => {
            const tutorEntity = plainToClass(TutorEntity, createTutor);
            const url = `/tutors/${tutorEntity.id}`;
            return request(app.getHttpServer())
                .delete(url)
                .set('Authorization', accessToken)
                .expect(204)
                .then(resp => console.log('tutors-delete', resp.body))
        });


    });

    afterAll(async () => {
        await app.close();
    });
});
