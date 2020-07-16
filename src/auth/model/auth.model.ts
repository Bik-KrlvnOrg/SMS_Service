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
 * UserEntity
 */
export class UserEntity {
  id: number;
  username: string;
  type: AuthType;
  school?:number
}

/**
 * Login payload
 */
export class LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType?: string;
}
