import {ErrorCode} from "../common/error-code";
import {HttpException, HttpStatus} from "@nestjs/common";

export class SubjectNotFoundException extends HttpException {
    constructor(message: string) {
        super({
            message,
            code: ErrorCode.SUBJECT_NOT_FOUND,
        }, HttpStatus.BAD_REQUEST);
        this.name = this.constructor.name;
    }
}