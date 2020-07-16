import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../model/auth.model';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto';
import { toHumanFullDate, addDaysToDate } from '../../utils/date-time.utils';
import { TokenRepository } from './token.repository';
import { TokenType } from './model/token.model';

export interface refreshTokenPayload {
  refreshToken: string;
  oldAccessToken: string;
}

export interface JwtPayload {
  accessToken: string;
  refreshToken: string;
  tokenType?: TokenType;
}

/**
 * Token service
 */
@Injectable()
export class TokenService {
  /**
   * Creates an instance of token service.
   * @param tokenRepository TokenRepository
   * @param jwtService JwtService
   */
  constructor(
    @InjectRepository(TokenRepository) private tokenRepository: TokenRepository,
    private jwtService: JwtService,
  ) {}
  /**
   * generateAccessToken
   * @param payload AuthPayload
   * @returns JwtPayload
   */
  async generateAccessToken(payload: UserEntity): Promise<JwtPayload> {
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.generateRefreshToken(payload);
    const token: JwtPayload = {
      accessToken,
      refreshToken,
      tokenType: TokenType.Bearer,
    };
    return token;
  }

  private async generateRefreshToken(payload: UserEntity): Promise<string> {
    const token = randomBytes(64).toString('hex');
    await this.saveRefreshToken(token, payload.id, payload.username);
    return token;
  }

  private async saveRefreshToken(
    token: string,
    clientId: number,
    clientName: string,
  ): Promise<void> {
    await this.tokenRepository.createToken(
      clientId,
      clientName,
      token,
      addDaysToDate(process.env.JWT_EXPIRE_RERESH),
    );
  }

  /**
   * getAccessTokenFromRefreshToken
   * @param payload refreshTokenPayload
   * @returns JwtPayload
   */
  async getAccessTokenFromRefreshToken(
    payload: refreshTokenPayload,
  ): Promise<JwtPayload> {
    const { refreshToken, oldAccessToken } = payload;
    const token = await this.tokenRepository.findOne({ value: refreshToken });

    const currentDate = new Date();
    if (!token) throw new BadRequestException('token not found');
    if (token.expiresAt < currentDate)
      throw new BadRequestException(
        `Session has expired on ${toHumanFullDate(
          token.expiresAt,
        )} current time is ${toHumanFullDate(currentDate)}`,
      );

    const { id, type, school, username } = await this.validateToken(
      oldAccessToken,
      true,
    );

    const authPayload: UserEntity = { id, type, school, username };

    const accessToken = await this.generateAccessToken(authPayload);
    await this.tokenRepository.delete({
      id: token.id,
      clientName: token.clientName,
    });
    return accessToken;
  }

  private async validateToken(
    token: string,
    ignoreExpiration = false,
  ): Promise<UserEntity> {
    return (await this.jwtService.verifyAsync(token, {
      ignoreExpiration,
    })) as UserEntity;
  }
}
