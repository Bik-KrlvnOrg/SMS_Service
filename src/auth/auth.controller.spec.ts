import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginPayload, CredentialDto } from './model/auth.model';
import { AuthType } from './enum/auth.enum';

describe('Auth Controller', () => {
  let controller: AuthController;
  let service: AuthService;
  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STAFF,
  };

  const mockService = () => ({
    authenticate: jest.fn(),
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
    const loginPayload: LoginPayload = { accessToken: 'any_token' };
    it('should return accessToken with correct credential', async () => {
      jest
        .spyOn(service, 'authenticate')
        .mockImplementation(() => Promise.resolve(loginPayload));
      const expected = await controller.login(credential);
      expect(expected).toBe(loginPayload);
    });
  });
});
