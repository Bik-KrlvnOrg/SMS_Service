import {ErrorCode} from "../common/error-code";
import {HttpException, HttpStatus} from "@nestjs/common";

export class SubjectTypeNotFoundException extends HttpException {
    constructor(message: string) {
        super({
            message,
            code: ErrorCode.SUBJECT_TYPE_NOT_FOUND,
        }, HttpStatus.BAD_REQUEST);
        this.name = this.constructor.name;
    }
}