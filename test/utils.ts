import {BaseRepository} from "typeorm-transactional-cls-hooked";
import {
    ConfirmationTokenEntity,
    RoleEntity,
    SubjectTypeEntity,
    TokenEntity,
    TutorEntity,
    UserEntity
} from "../src/entities";
import tutorsJson from "./testdata/tutors.json";
import usersJson from './testdata/users.json'
import {plainToClass} from "class-transformer";
import userJson from './testdata/user.json'
import rolesJson from './testdata/roles.json'
import confirmationTokensJson from './testdata/confirmation-tokens.json'
import subjectTypesJson from './testdata/subject-types.json'


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
    findOne: jest.fn((id) => usersJson.find(user => user.id == id)),
    create: jest.fn(dto => plainToClass(UserEntity, dto)),
    createUser: jest.fn(_ => plainToClass(UserEntity, userJson)),
    findByUsername: jest.fn(username => usersJson.find(user => user.username == username)),
    save: jest.fn(entity => entity),
    find: jest.fn(() => usersJson),
    findByEmail: jest.fn(_ => null),
    remove: jest.fn(entity => usersJson.filter(t => t.id == entity.id)),
}));

const token = new TokenEntity()
token.user = plainToClass(UserEntity, userJson)
export const tokenRepositoryMock: () => MockType<BaseRepository<TokenEntity>> = jest.fn(() => ({
    findOne: jest.fn(_ => token),
    create: jest.fn(dto => plainToClass(TokenEntity, dto)),
    save: jest.fn(entity => entity),
}));


export const confirmationRepositoryMock: () => MockType<BaseRepository<ConfirmationTokenEntity>> = jest.fn(() => ({
    findOne: jest.fn(({token}) => confirmationTokensJson.find(_token => _token.token == token)),
    create: jest.fn(dto => plainToClass(UserEntity, dto)),
    save: jest.fn(entity => entity),
}));

export const roleRepositoryMock: () => MockType<BaseRepository<RoleEntity>> = jest.fn(() => ({
    findOne: jest.fn((id) => rolesJson.find(token => token.id == id)),
    create: jest.fn(dto => plainToClass(RoleEntity, dto)),
    save: jest.fn(entity => entity),
    findByIds: jest.fn(ids => rolesJson.filter(role => ids.map(d => d).includes(role.id))),
    find: jest.fn(() => rolesJson),
    remove: jest.fn(entity => rolesJson.filter(t => t.id == entity.id)),
}));

export const subjectTypeRepositoryMock: () => MockType<BaseRepository<SubjectTypeEntity>> = jest.fn(() => ({
    findOne: jest.fn((opt) =>
        subjectTypesJson.find(subType => subType.id == opt.id || subType.name == opt.name)),
    create: jest.fn(dto => plainToClass(SubjectTypeEntity, dto)),
    save: jest.fn(entity => entity),
    find: jest.fn(() => subjectTypesJson),
    remove: jest.fn(entity => subjectTypesJson.filter(t => t.id == entity.id)),
}));

export const mockedJwtService = {
    signAsync: jest.fn(({}, _) => "jwt_token")
}

export const mockedMailService = {
    sendMail: jest.fn(() => {
    })
}
