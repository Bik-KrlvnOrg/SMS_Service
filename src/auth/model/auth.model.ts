import { AuthType } from '../enum/auth.enum';
import { IsString } from 'class-validator';
/**
 * Credential dto
 */
export class CredentialDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  type: AuthType;
}

/**
 * Auth payload
 */
export interface AuthPayload {
  id: number;
  username: string;
  type: AuthType;
}

/**
 * Login payload
 */
export class LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType?:string
}

/**
 * User entity
 */
export class UserEntity {
  constructor(public id: number, public type: AuthType,public username:string) {}
}
