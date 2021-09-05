import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {RoleService} from './role.service';
import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../security/guard";
import {PermissionsGuard} from "../security/guard/permissions.guard";
import {Roles} from "../decorator";
import {Role} from "../../libs";

@Controller('roles')
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Roles(Role.SUPER_ADMIN)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(id);
  }
}
