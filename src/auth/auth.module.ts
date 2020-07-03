import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from '../student/student.repository';
import { StaffRepository } from '../staff/staff.repository';
import { JwtPassportStrategy } from './jwt.passport.strategy';
import { AdminRepository } from '../admin/admin.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
    TypeOrmModule.forFeature([
      StudentRepository,
      StaffRepository,
      AdminRepository,
    ]),
  ],
  providers: [AuthService, JwtPassportStrategy],
  controllers: [AuthController],
  exports: [JwtPassportStrategy, PassportModule],
})
export class AuthModule {}
