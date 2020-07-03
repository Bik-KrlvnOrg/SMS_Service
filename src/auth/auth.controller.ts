import {
  Controller,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import {
  CredentialDto,
  LoginPayload,
} from './model/auth.model';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Body(ValidationPipe) credential: CredentialDto,
  ): Promise<LoginPayload> {
    return this.authService.authenticate(credential);
  }


}
