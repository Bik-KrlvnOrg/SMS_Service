import { BullModuleOptions, BullOptionsFactory } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BullConfigService implements BullOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createBullOptions(): BullModuleOptions | Promise<BullModuleOptions> {
        const redis = this.configService.get('redis')
        return {
            name: 'notification_queue',
            redis: {
                host: redis.host,
                port: redis.port
            }
        }
    }
}