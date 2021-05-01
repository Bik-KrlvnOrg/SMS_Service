import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../common/error-code';

export class InvalidCredentialException extends HttpException {
  constructor(message: string = 'username or password invalid') {
    super({
      message,
      code: ErrorCode.USER_BAD_CREDENTIAL,
    }, HttpStatus.UNAUTHORIZED);
    this.name = this.constructor.name;
  }

}