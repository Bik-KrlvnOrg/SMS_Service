import {Test, TestingModule} from "@nestjs/testing";
import {UserService} from "../service";
import {BcryptPasswordEncoderImpl, ConfirmationTokenService, TokenService} from "../../security/service";
import {UserRepository} from "../repository";
import {
    confirmationRepositoryMock,
    mockedJwtService,
    roleRepositoryMock,
    tokenRepositoryMock,
    userRepositoryMock
} from "../../../../test/utils";
import {MAIL_PROVIDER, MailService} from "../../notification/interface/mail.service";
import {ConfirmationTokenRepository, TokenRepository} from "../../security/repository";
import {JwtService} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {UrlGeneratorModule} from "nestjs-url-generator";
import {RoleService} from "../../role/role.service";
import {config} from "../../../libs";
import {UrlGeneratorConfig} from "../../../libs/config/url-generator-service.config";
import {PasswordEncoder} from "../../security/interface";
import userCredentialJson from '../../../../test/testdata/user-credential.json'
import {RoleRepository} from "../../role/repository/role.repository";
import {NodeMailerService} from "../../notification/nodemailer/node-mailer.service";
import {plainToClass} from "class-transformer";
import {CreateUserDto, LoginUserDto} from "../dto";
import createUserJson from '../testdata/create-user.json'

const ENV = "test"

jest.mock('typeorm-transactional-cls-hooked', () => ({
    Transactional: () => () => ({}),
    BaseRepository: class {
    },
}));

describe('UserService', function () {
    let userService: UserService
    let roleService: RoleService
    let passwordEncoder: PasswordEncoder
    let mailService: MailService
    let confirmationTokenService: ConfirmationTokenService


    beforeEach(async () => {

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
            providers: [
                UserService,
                TokenService,
                ConfirmationTokenService,
                BcryptPasswordEncoderImpl,
                TokenService,
                RoleService,
                NodeMailerService,
                {provide: UserRepository, useValue: userRepositoryMock()},
                {provide: MAIL_PROVIDER, useClass: NodeMailerService},
                {provide: TokenRepository, useValue: tokenRepositoryMock()},
                {provide: ConfirmationTokenRepository, useValue: confirmationRepositoryMock()},
                {provide: JwtService, useValue: mockedJwtService},
                {provide: RoleRepository, useValue: roleRepositoryMock()},

            ],
        })
            .compile();
        userService = await module.get<UserService>(UserService);
        roleService = await module.get<RoleService>(RoleService);
        passwordEncoder = await module.get<BcryptPasswordEncoderImpl>(BcryptPasswordEncoderImpl)
        mailService = await module.get(NodeMailerService)
        confirmationTokenService = await module.get(ConfirmationTokenService)
    });

    describe('Define - dependencies', () => {
        it('UserService - defined', () => {
            expect(userService).toBeDefined()
        });

        it('PasswordEncoder - defined', () => {
            expect(passwordEncoder).toBeDefined()
        });

        it('ConfirmationTokenService - defined', () => {
            expect(confirmationTokenService).toBeDefined()
        });

        it('MailService - defined', () => {
            expect(mailService).toBeDefined()
        });
    });

    it('Create - should register new user ', async () => {
        expect(await userService.create(plainToClass(CreateUserDto, createUserJson))).toHaveProperty('id')
    });

    it('UsernameAndPassword - should login user with credentials ', async () => {
        jest.spyOn(passwordEncoder, 'decode').mockResolvedValue(true);
        expect(await userService.usernameAndPassword(
            plainToClass(LoginUserDto, userCredentialJson))
        ).toHaveProperty('accessToken')
    });

    it('Confirmation - should verify email conformation token ', async () => {
        const confirmation = await userService.confirmation('confirmation_token');
        expect(confirmation.message).toBe("user account confirmed")
    });

    it('should return all users ', async () => {
        expect(await userService.findAll()).not.toBeNull()
    });

});