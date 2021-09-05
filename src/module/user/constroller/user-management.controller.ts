import {UserService} from '../service';
import {AssignRoleDto} from '../dto';
import {RoleService} from '../../role/role.service';
import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {classToPlain, plainToClass} from 'class-transformer';
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../../security/guard";
import {PermissionsGuard} from "../../security/guard/permissions.guard";
import {Roles} from "../../decorator";
import {Permission, Role} from "../../../libs";
import {RolePermission} from "../../decorator/permission.decorator";

@Controller('users/management')
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Roles(Role.SUPER_ADMIN)
@RolePermission(Permission.EDIT)
export class UserManagementController {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService) {
  }

  @Post()
  async assignRole(@Body() assignRoleDto: AssignRoleDto) {
    const dto = plainToClass(AssignRoleDto, assignRoleDto);
    const user = await this.userService.findOne(dto.userId);
    user.role = await this.roleService.findIds(dto.roles);
    return classToPlain(await this.userService.save(user))
  }
}