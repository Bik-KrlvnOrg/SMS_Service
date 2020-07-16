import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { StudentRepository } from '../student/student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CredentialDto, UserEntity, LoginResponse } from './model/auth.model';
import { AuthType } from './enum/auth.enum';
import { StaffRepository } from '../staff/staff.repository';
import { AdminRepository } from '../admin/admin.repository';
import { TokenService } from './token/token.service';
import { RefreshTokenDto } from './token/model/token.model';

/**
 * Auth service
 */
@Injectable()
export class AuthService {
  /**
   * Creates an instance of auth service.
   * @param studentRepository
   * @param staffRepository
   * @param adminRepository
   */
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
    @InjectRepository(StaffRepository) private staffRepository: StaffRepository,
    @InjectRepository(AdminRepository) private adminRepository: AdminRepository,
    private tokenService: TokenService,
  ) {}

  /**
   * authenticate
   * @param credential CredentialDto
   * @returns LoginPayload
   */
  async authenticate(credential: CredentialDto): Promise<LoginResponse> {
    const payload = await this.getAuthPayload(credential);
    const response: LoginResponse = await this.tokenService.generateAccessToken(
      payload,
    );
    return response;
  }

  /**
   * Generates access token
   * @param payload RefreshTokenDto
   * @returns LoginResponse
   */
  async generateAccessToken(payload: RefreshTokenDto): Promise<LoginResponse> {
    const response: LoginResponse = await this.tokenService.getAccessTokenFromRefreshToken(
      payload,
    );
    return response;
  }

  /**
   * getAuthPayload
   * @param credential CredentialDto
   * @returns AuthPayload
   */
  private async getAuthPayload(
    credential: CredentialDto,
  ): Promise<UserEntity> {
    switch (credential.type) {
      case AuthType.STUDENT:
        return this.getAuthStudentPayload(credential);
      case AuthType.STAFF:
        return this.getAuthStaffPayload(credential);
      case AuthType.ADMIN:
        return this.getAuthAdminPayload(credential);

      default:
        throw new BadRequestException(
          `user type: ${credential.type} not found`,
        );
    }
  }

  /**
   * getAuthStudentPayload
   * @param credential CredentialDto
   * @returns AuthPayload
   */
  private async getAuthStudentPayload(
    credential: CredentialDto,
  ): Promise<UserEntity> {
    const { type } = credential;
    const student = await this.studentRepository.getStudentWithCredential(
      credential,
    );

    if (!student) throw new UnauthorizedException('invalid credentials');

    const payload: UserEntity = {
      username: student.preStudentUsername,
      id: student.esPreadmissionid,
      type,
    };
    return payload;
  }

  /**
   * getAuthStaffPayload
   * @param credential CredentialDto
   * @returns  AuthPayload
   */
  private async getAuthStaffPayload(
    credential: CredentialDto,
  ): Promise<UserEntity> {
    const { type } = credential;
    const staff = await this.staffRepository.getStaffWithCredential(credential);

    if (!staff) throw new UnauthorizedException('invalid credentials');

    const payload: UserEntity = {
      username: staff.stUsername,
      id: staff.esStaffid,
      type,
    };
    return payload;
  }

  /**
   * getAuthAdminPayload
   * @param credential CredentialDto
   * @returns AuthPayload
   */
  private async getAuthAdminPayload(
    credential: CredentialDto,
  ): Promise<UserEntity> {
    const { type } = credential;
    const admin = await this.adminRepository.getAdminWithCredential(credential);

    if (!admin) throw new UnauthorizedException('invalid credentials');

    const payload: UserEntity = {
      username: admin.adminUsername,
      id: admin.esAdminsid,
      type,
    };
    return payload;
  }
}
