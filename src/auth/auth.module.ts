import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtPassportStrategy } from './jwt.passport.strategy';
import { AdminRepository } from '../admin/admin.repository';
import { TokenService } from './token/token.service';
import { TokenRepository } from './token/token.repository';
import { StudentRepository } from '../module/student/repository';
import { StaffRepository } from '../module/staff/repository';
import { JwtConfigService } from '../libs';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useClass: JwtConfigService
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
export class AuthModule { }
