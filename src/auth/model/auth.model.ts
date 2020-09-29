import { IsEnum, IsString } from 'class-validator';
import { AuthType } from '../../libs';
/**
 * Credential dto
 */
export class CredentialDto {
  @IsString()
  username: string;
  
  @IsString()
  password: string;

  @IsEnum(AuthType)
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
