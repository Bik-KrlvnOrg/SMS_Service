import {UserEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class AssignUserDto {
    tutorId: string
    @IsNotEmpty()
    user: UserEntity
}