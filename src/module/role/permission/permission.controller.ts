import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {PermissionService} from "./permission.service";
import {CreatePermissionDto} from "./dto/create-permission.dto";
import {UpdatePermissionDto} from "./dto/update-permission.dto";
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../../security/guard";
import {PermissionsGuard} from "../../security/guard/permissions.guard";
import {Roles} from "../../decorator";
import {Role} from "../../../libs";

@Controller('roles/permissions')
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Roles(Role.SUPER_ADMIN)
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) {
    }

    @Post()
    create(@Body() createPermissionDto: CreatePermissionDto) {
        return this.permissionService.create(createPermissionDto);
    }

    @Get('all')
    findAll() {
        return this.permissionService.findAll()
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('here', id)
        return this.permissionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
        return this.permissionService.update(id, updatePermissionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.permissionService.remove(id);
    }


}
