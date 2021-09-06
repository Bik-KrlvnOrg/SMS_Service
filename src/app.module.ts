import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config, TypeOrmConfigService} from './libs';
import {ConfigModule} from '@nestjs/config';
import {StudentModule} from './module/student';
import {UserModule} from './module/user';
import {SecurityModule} from './module/security';
import {RoleModule} from './module/role/role.module';
import {SeedModule} from './module/seed/seed.module';
import {NotificationModule} from './module/notification/notification.module';
import {UrlGeneratorModule} from "nestjs-url-generator";
import {UrlGeneratorConfig} from "./libs/config/url-generator-service.config";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService
        }),
        UrlGeneratorModule.forRootAsync({
            useClass: UrlGeneratorConfig
        }),
        StudentModule,
        UserModule,
        SecurityModule,
        RoleModule,
        SeedModule,
        NotificationModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
