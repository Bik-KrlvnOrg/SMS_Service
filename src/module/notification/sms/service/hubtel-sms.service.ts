import { ISmsService } from "../../interface";
import { HubtelSmsDto } from "../dto";

export class HubtelSmsService implements ISmsService<HubtelSmsDto>{
    
    sendMessage(_body: HubtelSmsDto) {
        throw new Error("Method not implemented.");
    }
}