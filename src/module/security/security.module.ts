import { Module } from '@nestjs/common';
import { BcryptPasswordEncoderImpl } from './service/bcrypt-password-encoder-impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenRepository } from './repository/token.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtOptionFactoryService } from './service/jwt-option-factory.service';
import { TokenService } from './service/token.service';
import { ConfirmationTokenService } from './service/confirmation-token.service';
import { ConfirmationTokenRepository } from './repository/confirmation-token.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TokenRepository,
      ConfirmationTokenRepository,
    ]),
    JwtModule.registerAsync({
      useClass: JwtOptionFactoryService,
    })],
  providers: [BcryptPasswordEncoderImpl, TokenService, ConfirmationTokenService],
  exports: [BcryptPasswordEncoderImpl, TokenService, ConfirmationTokenService],
})
export class SecurityModule {
}
