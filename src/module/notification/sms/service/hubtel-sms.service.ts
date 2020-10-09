import { Injectable, Logger } from "@nestjs/common";
import { ISmsService } from "../../interface";
import { HubtelSmsDto } from "../dto";

@Injectable()
export class HubtelSmsService implements ISmsService<HubtelSmsDto>{
    logger = new Logger(this.constructor.name)

    async sendMessage(body: HubtelSmsDto): Promise<void> {
        this.logger.log(body, 'sendMessage')
    }

}