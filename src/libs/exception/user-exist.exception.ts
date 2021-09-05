import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../common/error-code';

export class UserExistException extends HttpException {
  constructor(message: string) {
    super({
      message,
      code: ErrorCode.USER_EXIST,
    }, HttpStatus.BAD_REQUEST);
    this.name = this.constructor.name;
  }

}