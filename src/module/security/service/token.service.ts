import {Injectable} from '@nestjs/common';
import {TokenEntity, UserEntity} from '../../../entities';
import {Transactional} from 'typeorm-transactional-cls-hooked';
import {TokenRepository} from '../repository';
import {JwtService, JwtSignOptions} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {JWTConfig, TokenException} from '../../../libs';
import {ErrorCode} from '../../../libs/common/error-code';
import {TokenExpiredError} from 'jsonwebtoken';

export interface AccessTokenPayload {
    iat: number,
    exp: number,
    aud: string,
    iss: string,
    sub: string
}

export interface RefreshTokenPayload {
    jti: string;
    sub: string
}

@Injectable()
export class TokenService {
    constructor(
        private readonly tokenRepository: TokenRepository,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService) {
    }

    public async generateAccessToken(token: TokenEntity): Promise<string> {
        const {refresh, ...jwt} = this.configService.get<JWTConfig>('jwt');
        const opts: JwtSignOptions = {
            ...jwt,
            subject: token.user.id,
        };

        return this.jwtService.signAsync({}, opts);
    }

    @Transactional()
    async createRefreshToken(token: TokenEntity, ttl: number = 60 * 60 * 1000): Promise<string> {
        const {refresh, ...jwt} = this.configService.get<JWTConfig>('jwt');
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + ttl);
        token.expires = expiration;
        const tokenEntity = this.tokenRepository.create(token);
        const entity = await this.tokenRepository.save(tokenEntity);
        const opts: JwtSignOptions = {
            ...jwt,
            subject: token.user.id,
            jwtid: entity.id,
        };
        return this.jwtService.signAsync({}, opts);
    }


    async resolveRefreshToken(encoded: string): Promise<TokenEntity> {
        const payload = await this.decodeRefreshToken(encoded);
        const token = await this.getTokenById(payload);

        if (!token) {
            throw new TokenException('Refresh token not found');
        }

        if (token.is_revoked) {
            throw new TokenException('Refresh token revoked', ErrorCode.TOKEN_REVOKED);
        }
        return token;
    }

    public async createAccessTokenFromRefreshToken(refresh: string): Promise<{ token: string, user: UserEntity }> {
        const entity = await this.resolveRefreshToken(refresh);
        const token = await this.generateAccessToken(entity);
        return {token, user: entity.user};
    }

    private async decodeRefreshToken(token: string): Promise<any> {
        try {
            return this.jwtService.verifyAsync(token);
        } catch (e) {
            if (e instanceof TokenExpiredError) {
                throw new TokenException('Refresh token expired',
                    ErrorCode.TOKEN_EXPIRED);
            }
            throw new TokenException('Refresh token malformed',
                ErrorCode.TOKEN_MALFORMED);
        }
    }


    private async getTokenById(payload: RefreshTokenPayload): Promise<TokenEntity> {
        const tokenId = payload.jti;
        if (!tokenId) throw new TokenException('Refresh token malformed',
            ErrorCode.TOKEN_MALFORMED);
        return this.tokenRepository.findOne({id: tokenId});
    }


}