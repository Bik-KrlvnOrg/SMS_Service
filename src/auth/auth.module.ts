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
import { TokenService } from './token/token.service';
import { EsToken } from '../entities/EsToken';
import { TokenRepository } from './token/token.repository';

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
      TokenRepository,
    ]),
  ],
  providers: [AuthService, JwtPassportStrategy, TokenService],
  controllers: [AuthController],
  exports: [JwtPassportStrategy, PassportModule],
})
export class AuthModule {}
