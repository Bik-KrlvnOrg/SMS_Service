import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from './model/auth.model';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from '../admin/admin.repository';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { AuthType } from '../libs';
import { StudentRepository } from '../module/student/repository';
import { StaffRepository } from '../module/staff/repository';

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
    console.log('secret', process.env.JWT_SECRET);
  }

  async validate(payload: UserEntity): Promise<UserEntity> {
    const user = await this.getUser(payload);
    if (!user) throw new UnauthorizedException();
    return user;
  }

  private async getUser(payload: UserEntity): Promise<UserEntity> {
    if (payload.type === AuthType.ADMIN) return this.getAdmin(payload);
    if (payload.type === AuthType.STAFF) return this.getStaff(payload);
    if (payload.type === AuthType.STUDENT) return this.getStudent(payload);
    throw new Error(`type: '${payload.type}' not implemented`);
  }

  private async getAdmin(user: UserEntity) {
    const admin = await this.adminRepository.getAdminWithPayload(user);
    if (!admin) return null;
    return user;
  }

  private async getStaff(user: UserEntity): Promise<UserEntity> {
    const staff = await this.staffRepository.getStaffById(user.id);
    if (!staff) return null;
    return user;
  }

  private async getStudent(user: UserEntity): Promise<UserEntity> {
    const student = await this.studentRepository.getStudentById(user.id);
    if (!student) return null;
    return user;
  }
}
