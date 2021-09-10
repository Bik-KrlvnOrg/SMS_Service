import {ErrorCode} from "../common/error-code";
import {HttpException, HttpStatus} from "@nestjs/common";

export class TutorNotFoundException extends HttpException {
    constructor(message: string) {
        super({
            message,
            code: ErrorCode.TUTOR_NOT_FOUND,
        }, HttpStatus.BAD_REQUEST);
        this.name = this.constructor.name;
    }
}