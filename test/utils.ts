import {BaseRepository} from "typeorm-transactional-cls-hooked";
import {TutorEntity, UserEntity} from "../src/entities";
import tutorsJson from "./testdata/tutors.json";
import usersJson from './testdata/users.json'
import {plainToClass} from "class-transformer";

export type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};


export const tutorRepositoryMock: () => MockType<BaseRepository<TutorEntity>> = jest.fn(() => ({
    findOne: jest.fn(({id}) => tutorsJson.find(tutor => tutor.id == id)),
    create: jest.fn(dto => plainToClass(TutorEntity, dto)),
    save: jest.fn(entity => entity),
    find: jest.fn(() => tutorsJson),
    remove: jest.fn(entity => tutorsJson.filter(tutor => tutor.id == entity.id)),
}));

export const userRepositoryMock: () => MockType<BaseRepository<UserEntity>> = jest.fn(() => ({
    findOne: jest.fn(({id}) => usersJson.find(user => user.id == id)),
    create: jest.fn(dto => plainToClass(UserEntity, dto)),
    save: jest.fn(entity => entity),
    find: jest.fn(() => usersJson),
    remove: jest.fn(entity => usersJson.filter(t => t.id == entity.id)),
}));

export const mockedConfigService = {
    get(key: string) {
        switch (key) {
            case 'JWT_ACCESS_TOKEN_EXPIRATION_TIME':
                return '3600'
        }
    }
}