import {IsNotEmpty} from "class-validator";

export class CreatePermissionDto {
  @IsNotEmpty()
  name: string;
  description: string;
}
