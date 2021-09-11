import {Test, TestingModule} from "@nestjs/testing";
import {UserController} from "./user.controller";
import {UserService} from "../service";
import {BcryptPasswordEncoderImpl, ConfirmationTokenService, TokenService} from "../../security/service";
import {UserRepository} from "../repository";
import {
    confirmationRepositoryMock,
    mockedJwtService,
    mockedMailService,
    roleRepositoryMock,
    tokenRepositoryMock,
    userRepositoryMock
} from "../../../../test/utils";
import {MAIL_PROVIDER} from "../../notification/interface/mail.service";
import {ConfirmationTokenRepository, TokenRepository} from "../../security/repository";
import {JwtService} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {UrlGeneratorModule} from "nestjs-url-generator";
import {RoleService} from "../../role/role.service";
import {config} from "../../../libs";
import {UrlGeneratorConfig} from "../../../libs/config/url-generator-service.config";
import {CanActivate, HttpStatus, INestApplication, ValidationPipe} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {PermissionsGuard} from "../../security/guard/permissions.guard";
import {PasswordEncoder} from "../../security/interface";
import userCredentialJson from '../../../../test/testdata/user-credential.json'
import assignRoleJson from '../testdata/assign-role.json'
import {RoleRepository} from "../../role/repository/role.repository";


const request = require('supertest');
const ENV = "test"

jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));

describe('UserController', function () {
    let controller: UserController;
    let userService: UserService
    let roleService: RoleService
    let app: INestApplication
    let bcrypt: PasswordEncoder


    beforeEach(async () => {
        const mockGuard: CanActivate = {canActivate: jest.fn(() => true)};

        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: !ENV ? '.env' : `.env.${ENV}`,
                    load: [config],
                }),
                UrlGeneratorModule.forRootAsync({
                    useClass: UrlGeneratorConfig
                }),
            ],
            controllers: [UserController],
            providers: [
                UserService,
                TokenService,
                ConfirmationTokenService,
                BcryptPasswordEncoderImpl,
                TokenService,
                RoleService,
                {provide: UserRepository, useValue: userRepositoryMock()},
                {provide: MAIL_PROVIDER, useValue: mockedMailService},
                {provide: TokenRepository, useValue: tokenRepositoryMock()},
                {provide: ConfirmationTokenRepository, useValue: confirmationRepositoryMock()},
                {provide: JwtService, useValue: mockedJwtService},
                {provide: RoleRepository, useValue: roleRepositoryMock()},

            ],
        })
            .overrideGuard(AuthGuard('jwt'))
            .useValue(mockGuard)
            .overrideGuard(PermissionsGuard)
            .useValue(mockGuard)
            .compile();
        controller = await module.get<UserController>(UserController);
        userService = await module.get<UserService>(UserService);
        roleService = await module.get<RoleService>(RoleService);
        bcrypt = await module.get<BcryptPasswordEncoderImpl>(BcryptPasswordEncoderImpl)

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();

    });

    describe('Define - dependencies', () => {
        it('Controller defined', () => {
            expect(controller).toBeDefined()
        });
        it('UserService defined', () => {
            expect(userService).toBeDefined()
        });
        it('RoleService defined', () => {
            expect(roleService).toBeDefined()
        });
    });

    it('should register new user ', () => {
        jest.spyOn(bcrypt, 'encode').mockResolvedValue("hashed_password");
        return request(app.getHttpServer())
            .post('/users/register')
            .expect(HttpStatus.CREATED)
            .then(value => expect(value.body).toHaveProperty('id'))
    });

    it('should login user with credentials ', () => {
        jest.spyOn(bcrypt, 'decode').mockResolvedValue(true);
        return request(app.getHttpServer())
            .post('/users/login')
            .send(userCredentialJson)
            .expect(HttpStatus.OK)
            .then(value => expect(value.body).toHaveProperty('accessToken'))
    });

    it('should assign user a role ', () => {
        return request(app.getHttpServer())
            .post('/users/assign-role')
            .send(assignRoleJson)
            .expect(HttpStatus.NO_CONTENT)
    });

    it('should return all users ', () => {
        return request(app.getHttpServer())
            .get('/users')
            .expect(HttpStatus.OK)
            .then(value => expect(value.body).not.toBeNull())
    });

});