import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AccessTokenPayload } from '../service';
import { UserDetailImplService } from '../service';

export interface UserPayload {
  id: string
  username: string
  roles: string[]
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userDetailService: UserDetailImplService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: AccessTokenPayload) {
    const user = await this.userDetailService.loadUserById(payload.sub);
    return {
      id: user.getUserId(),
      username: user.getUsername(),
      roles: user.getRoles(),
    };
  }

}