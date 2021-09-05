import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../common/error-code';

export class UserNotFoundException extends HttpException {
  constructor(message: string) {
    super({
      message,
      code: ErrorCode.USER_NOT_FOUND,
    }, HttpStatus.BAD_REQUEST);
  }


}