import {
  Controller,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import {
  CredentialDto,
  LoginResponse,
} from './model/auth.model';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './token/model/token.model';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Body(ValidationPipe) credential: CredentialDto,
  ): Promise<LoginResponse> {
    return this.authService.authenticate(credential);
  }

  @Post('/refresh-token')
  refreshAccessToken(
    @Body(ValidationPipe) refreshDto: RefreshTokenDto,
  ): Promise<LoginResponse> {
    return this.authService.generateAccessToken(refreshDto);
  }

}
