import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginResponse, CredentialDto } from './model/auth.model';
import { AuthType } from './enum/auth.enum';
import { RefreshTokenDto, TokenType } from './token/model/token.model';

describe('Auth Controller', () => {
  let controller: AuthController;
  let service: AuthService;

  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STAFF,
  };

  const refreshTokenDto: RefreshTokenDto = {
    oldAccessToken: 'any_access_token',
    refreshToken: 'any_refresh_token',
  };

  const mockService = () => ({
    authenticate: jest.fn(),
    generateAccessToken: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        { provide: AuthService, useFactory: mockService },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  describe('login', () => {
    const loginPayload: LoginResponse = {
      accessToken: 'any_token',
      refreshToken: 'any_refresh',
      tokenType:TokenType.Bearer
    };

    it('should return accessToken with correct credential', async () => {
      jest
        .spyOn(service, 'authenticate')
        .mockImplementation(() => Promise.resolve(loginPayload));
      const expected = await controller.login(credential);
      console.log('exp',expected)
      expect(expected).toBe(loginPayload);
    });
  });

  describe('refreshAccessToken', () => {
    const loginPayload: LoginResponse = {
      accessToken: 'any_token',
      refreshToken: 'any_refresh',
    };

    it('should return accessToken with valid refresh token', async () => {
      jest
        .spyOn(service, 'generateAccessToken')
        .mockImplementation(() => Promise.resolve(loginPayload));
      const expected = await controller.refreshAccessToken(refreshTokenDto);
      expect(expected).toBe(loginPayload);
    });
  });
});
