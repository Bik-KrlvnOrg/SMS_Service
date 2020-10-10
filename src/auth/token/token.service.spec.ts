import { Test, TestingModule } from '@nestjs/testing';
import { TokenService, JwtPayload, refreshTokenPayload } from './token.service';
import { JwtService } from '@nestjs/jwt';
import { TokenRepository } from './token.repository';
import { UserEntity } from '../model/auth.model';
import { randomBytes } from 'crypto';
import { BadRequestException } from '@nestjs/common';
import { addMinutesToDate } from '../../libs/utils/date-time.utils';
import { TokenType } from './model/token.model';
import { AuthType } from '../../libs';
import { ConfigService } from '@nestjs/config';

describe.only('TokenService', () => {
  let service: TokenService;
  let repository;
  let jwtService;

  const mockClassFunctions = () => ({
    signAsync: jest.fn(),
    verifyAsync: jest.fn(),
    createToken: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(),
  });

  const authPayload: UserEntity = {
    id: 1,
    type: AuthType['ADMIN'],
    username: 'any_username',
  };

  const jwtPayload: JwtPayload = {
    accessToken: randomBytes(64).toString('hex'),
    refreshToken: randomBytes(64).toString('hex'),
    tokenType: TokenType.Bearer
  };

  const refreshTokenPayload: refreshTokenPayload = {
    oldAccessToken: jwtPayload.accessToken,
    refreshToken: jwtPayload.refreshToken,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokenService,
        {
          provide: JwtService,
          useFactory: mockClassFunctions,
        },
        { provide: TokenRepository, useFactory: mockClassFunctions },
        { provide: ConfigService, useFactory: mockClassFunctions }
      ],
    }).compile();

    service = module.get<TokenService>(TokenService);
    jwtService = module.get<JwtService>(JwtService);
    repository = module.get<TokenRepository>(TokenRepository);
  });

  describe('generateAccessToken', () => {
    it('should return login payload', async () => {
      jwtService.signAsync.mockResolvedValue(jwtPayload.accessToken);
      const expected = await service.generateAccessToken(authPayload);
      expect(expected.accessToken).toEqual(jwtPayload.accessToken);
      expect(expected.refreshToken).not.toBeNull();
      expect(repository.createToken).toHaveBeenCalled(); 
    });
  });

  describe('getAccessTokenFromRefreshToken', () => {
    it('should throw BadRequestException with invalid refresh token', async () => {
      const payload = Object.assign({}, refreshTokenPayload);
      payload.refreshToken = 'invalid refresh token';

      repository.findOne.mockResolvedValue(null);
      expect(service.getAccessTokenFromRefreshToken(payload)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException with expired refresh token', async () => {
      const payload = Object.assign({}, refreshTokenPayload);
      payload.refreshToken = 'invalid refresh token';
      const expiresAt = addMinutesToDate(-12);

      repository.findOne.mockResolvedValue({ expiresAt });
      expect(service.getAccessTokenFromRefreshToken(payload)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException with expired refresh token', async () => {
      const expiresAt = addMinutesToDate(12);

      jwtService.signAsync.mockResolvedValue(jwtPayload.accessToken);
      repository.findOne.mockResolvedValue({
        id: 'any_id',
        clientName: 'any_client_name',
        expiresAt,
      });
      jwtService.verifyAsync.mockResolvedValue(authPayload);
      const expected = await service.getAccessTokenFromRefreshToken(
        refreshTokenPayload,
      );
      expect(expected.accessToken).toEqual(jwtPayload.accessToken);
      expect(expected.refreshToken).not.toBeNull();
      expect(repository.delete).toHaveBeenCalled();
    });
  });
});
