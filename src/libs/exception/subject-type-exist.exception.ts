import {ErrorCode} from "../common/error-code";
import {HttpException, HttpStatus} from "@nestjs/common";

export class SubjectTypeExistException extends HttpException {
    constructor(message: string) {
        super({
            message,
            code: ErrorCode.SUBJECT_TYPE_EXIST,
        }, HttpStatus.BAD_REQUEST);
        this.name = this.constructor.name;
    }
}