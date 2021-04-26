import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../common/error-code';

export class TokenException extends HttpException {
  constructor(message: string, code: number = ErrorCode.TOKEN_NOT_FOUND) {
    super({
      message,
      code,
    }, HttpStatus.UNAUTHORIZED);
  }
}