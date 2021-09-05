import { Module } from '@nestjs/common';
import {
  BcryptPasswordEncoderImpl,
  ConfirmationTokenService,
  JwtOptionFactoryService,
  TokenService,
  UserDetailImplService,
} from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfirmationTokenRepository, TokenRepository } from './repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from '../user/repository';
import { RolesGuard } from './guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TokenRepository,
      ConfirmationTokenRepository,
      UserRepository,
    ]),
    JwtModule.registerAsync({
      useClass: JwtOptionFactoryService,
    })],
  providers: [
    BcryptPasswordEncoderImpl,
    TokenService,
    ConfirmationTokenService,
    JwtStrategy,
    PassportModule,
    UserDetailImplService,
    RolesGuard,
  ],
  exports: [
    BcryptPasswordEncoderImpl,
    TokenService,
    ConfirmationTokenService,
    JwtStrategy,
    PassportModule,
  ],
})
export class SecurityModule {
}
