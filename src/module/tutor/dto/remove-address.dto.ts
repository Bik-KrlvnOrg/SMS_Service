import {AddressEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class RemoveAddressDto {
    tutorId: string
    @IsNotEmpty()
    addresses: AddressEntity[]
}