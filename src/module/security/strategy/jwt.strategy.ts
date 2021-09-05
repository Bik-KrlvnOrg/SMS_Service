import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Injectable} from '@nestjs/common';
import {AccessTokenPayload, UserDetailImplService} from '../service';
import {RolePermission} from "../interface";

export interface UserPayload {
    id: string
    username: string
    roles: string[]
    permissions: RolePermission[]
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

    async validate(payload: AccessTokenPayload): Promise<UserPayload> {
        const user = await this.userDetailService.loadUserById(payload.sub);
        console.log('us', user)
        return {
            id: user.getUserId(),
            username: user.getUsername(),
            roles: user.getRoles(),
            permissions: user.getPermissions()
        };
    }

}