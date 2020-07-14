import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthPayload, UserEntity } from './model/auth.model';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from '../student/student.repository';
import { StaffRepository } from '../staff/staff.repository';
import { AdminRepository } from '../admin/admin.repository';
import { AuthType } from './enum/auth.enum';
import { UnauthorizedException, Injectable } from '@nestjs/common';

@Injectable()
export class JwtPassportStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
    @InjectRepository(StaffRepository) private staffRepository: StaffRepository,
    @InjectRepository(AdminRepository) private adminRepository: AdminRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: AuthPayload): Promise<UserEntity> {
    const user = await this.getUser(payload);
    if (!user) throw new UnauthorizedException();
    return user;
  }

  private async getUser(payload: AuthPayload): Promise<UserEntity> {
    if (payload.type === AuthType.ADMIN) return this.getAdmin(payload);
    if (payload.type === AuthType.STAFF) return this.getStaff(payload);
    if (payload.type === AuthType.STUDENT) return this.getStudent(payload);
    throw new Error(`type: '${payload.type}' not implemented`);
  }
  private async getAdmin(payload: AuthPayload) {
    const admin = await this.adminRepository.getAdminWithPayload(payload);
    if (!admin) return null;
    const user = new UserEntity(admin.esAdminsid, payload.type,admin.adminUsername);
    return user;
  }

  private async getStaff(payload: AuthPayload): Promise<UserEntity> {
    const staff = await this.staffRepository.getStaffWithPayload(payload);
    if (!staff) return null;
    const user = new UserEntity(staff.esStaffid, payload.type,staff.stUsername);
    return user;
  }

  private async getStudent(payload: AuthPayload): Promise<UserEntity> {
    const student = await this.studentRepository.getStudentWithPayload(payload);
    if (!student) return null;
    const user = new UserEntity(student.esPreadmissionid, payload.type,student.preStudentUsername);
    return user;
  }
}
