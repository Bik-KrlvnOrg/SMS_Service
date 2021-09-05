import {IsNotEmpty} from "class-validator";
import {PermissionEntity} from "../../../entities";

export class CreateRoleDto {
    @IsNotEmpty()
    name: string;
    description: string;
    permissions: PermissionEntity[]
}
