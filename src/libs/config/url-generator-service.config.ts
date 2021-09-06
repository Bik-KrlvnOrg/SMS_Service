import {UrlGeneratorModuleOptions, UrlGeneratorModuleOptionsFactory} from "nestjs-url-generator";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class UrlGeneratorConfig implements UrlGeneratorModuleOptionsFactory {
    constructor(private readonly configService: ConfigService) {
    }

    createUrlGeneratorOptions(): Promise<UrlGeneratorModuleOptions> | UrlGeneratorModuleOptions {
        return {
            secret: this.configService.get('appKey'),
            appUrl: this.configService.get('appUrl'),
        };
    }


}