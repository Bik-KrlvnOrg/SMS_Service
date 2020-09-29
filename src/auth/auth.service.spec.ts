import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CredentialDto, UserEntity, LoginResponse } from './model/auth.model';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { StaffRepository } from '../staff/staff.repository';
import { AdminRepository } from '../admin/admin.repository';
import { TokenService } from './token/token.service';
import { RefreshTokenDto, TokenType } from './token/model/token.model';
import { AuthType } from '../libs';
import { StudentRepository } from '../module/student/repository';

const mockRepository = () => ({
  getStudentWithCredential: jest.fn(),
  getStaffWithCredential: jest.fn(),
  getAdminWithCredential: jest.fn(),
});

const mockTokenService = () => ({
  generateAccessToken: jest.fn(),
  getAccessTokenFromRefreshToken: jest.fn(),
});

describe('AuthService', () => {
  let service: AuthService;
  let studenRepository;
  let staffRepository;
  let adminRepository;
  let tokenService;

  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.ADMIN,
  };

  const studentData = {
    preStudentUsername: 'any_username',
    esPreadmissionid: 1,
  };

  const staffData = {
    stUsername: 'any_username',
    esStaffid: 1,
  };

  const adminData = {
    adminUsername: 'any_username',
    esAdminsid: 1,
  };

  const payload: UserEntity = {
    id: 1,
    type: credential.type,
    username: 'any_username',
  };

  const loginPayload: LoginResponse = {
    accessToken: 'any_token',
    refreshToken: 'any_refresh',
    tokenType:TokenType['Bearer']
  };

  const refreshTokenDto: RefreshTokenDto = {
    oldAccessToken: 'any_access_token',
    refreshToken: 'any_refresh_token',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: StudentRepository, useFactory: mockRepository },
        { provide: StaffRepository, useFactory: mockRepository },
        { provide: AdminRepository, useFactory: mockRepository },
        { provide: TokenService, useFactory: mockTokenService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    studenRepository = module.get<StudentRepository>(StudentRepository);
    staffRepository = module.get<StaffRepository>(StaffRepository);
    adminRepository = module.get<AdminRepository>(AdminRepository);
    tokenService = module.get<TokenService>(TokenService);
    tokenService.generateAccessToken.mockResolvedValue(loginPayload);
  });

  it('should throw an error as user type not found', () => {
    const cred = Object.assign({}, credential);
    cred.type = AuthType['unknown'];
    expect(service.authenticate(cred)).rejects.toThrow(BadRequestException);
  });

  describe('Authenticate student', () => {
    const studentCredential = Object.assign({}, credential);
    studentCredential.type = AuthType.STUDENT;
    const mockData = studentData;
    const studentPayload = Object.assign({}, payload);
    studentPayload.type = AuthType.STUDENT;

    it('should return access token for auth user', async () => {
      studenRepository.getStudentWithCredential.mockResolvedValue(mockData);

      const result = await service.authenticate(studentCredential);
      expect(studenRepository.getStudentWithCredential).toHaveBeenCalledWith(
        studentCredential,
      );
      expect(result).toEqual(loginPayload);
    });

    it('should throw unAuthorize error with invalid credentials', async () => {
      studenRepository.getStudentWithCredential.mockResolvedValue(null);
      expect(service.authenticate(studentCredential)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe('Authenticate staff', () => {
    const staffCredential = Object.assign({}, credential);
    staffCredential.type = AuthType.STAFF;
    const mockData = staffData;
    const staffPayload = Object.assign({}, payload);
    staffPayload.type = AuthType.STAFF;

    it('should return staff payload', async () => {
      staffRepository.getStaffWithCredential.mockResolvedValue(mockData);
      const result = await service.authenticate(staffCredential);
      expect(staffRepository.getStaffWithCredential).toHaveBeenCalledWith(
        staffCredential,
      );
      expect(result).toEqual(loginPayload);
    });

    it('should throw unAuthorize error with invalid credentials', async () => {
      staffRepository.getStaffWithCredential.mockResolvedValue(null);
      expect(service.authenticate(staffCredential)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe('Authenticate admin', () => {
    const mockData = adminData;
    const adminPayload = Object.assign({}, payload);
    adminPayload.type = AuthType.ADMIN;

    it('should return admin payload', async () => {
      adminRepository.getAdminWithCredential.mockResolvedValue(mockData);
      const result = await service.authenticate(credential);
      expect(adminRepository.getAdminWithCredential).toHaveBeenCalledWith(
        credential,
      );
      expect(result).toEqual(loginPayload);
    });

    it('should throw unAuthorize error with invalid credentials', async () => {
      adminRepository.getAdminWithCredential.mockResolvedValue(null);
      expect(service.authenticate(credential)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe('generateAccessToken', () => {
    it('should return login payload with valid refresh token', async () => {
      tokenService.getAccessTokenFromRefreshToken.mockResolvedValue(loginPayload);
      const expected = await service.generateAccessToken(refreshTokenDto);
      expect(expected).toEqual(loginPayload)
    });
  });
});
