import {Module} from '@nestjs/common';
import {PermissionService} from './permission.service';
import {PermissionController} from './permission.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PermissionRepository} from "./repository/permission.repository";

@Module({
    imports: [TypeOrmModule.forFeature([PermissionRepository])],
    providers: [PermissionService],
    controllers: [PermissionController]
})
export class PermissionModule {
}
