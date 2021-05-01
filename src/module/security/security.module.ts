import { Module } from '@nestjs/common';
import { BcryptPasswordEncoderImpl } from './service/bcrypt-password-encoder-impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenRepository } from './repository/token.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtOptionFactoryService } from './service/jwt-option-factory.service';
import { TokenService } from './service/token.service';
import { ConfirmationTokenService } from './service/confirmation-token.service';
import { ConfirmationTokenRepository } from './repository/confirmation-token.repository';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserDetailImplService } from './service/user-detail-impl.service';
import { UserRepository } from '../user/repository/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TokenRepository,
      ConfirmationTokenRepository,
      UserRepository
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
    UserDetailImplService
  ],
  exports: [
    BcryptPasswordEncoderImpl,
    TokenService,
    ConfirmationTokenService,
    JwtStrategy,
    PassportModule
  ],
})
export class SecurityModule {
}
