import {ErrorCode} from "../common/error-code";
import {HttpException, HttpStatus} from "@nestjs/common";

export class CourseNotFoundException extends HttpException {
    constructor(message: string) {
        super({
            message,
            code: ErrorCode.COURSE_NOT_FOUND,
        }, HttpStatus.BAD_REQUEST);
        this.name = this.constructor.name;
    }
}