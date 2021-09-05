import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JWTConfig } from '../../../libs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtOptionFactoryService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {
  }

  createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    const { secret, expiresIn, audience, issuer } =
      this.configService.get<JWTConfig>('jwt');
    return {
      secret,
      signOptions: {
        expiresIn, issuer, audience,
      },
    };
  }

}