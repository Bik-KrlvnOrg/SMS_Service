import { UserService } from '../service/user.service';
import { AssignRoleDto } from '../dto/assign-role.dto';
import { RoleService } from '../../role/role.service';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { Body, Controller, Post } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';

@Controller('users/management')
export class UserManagementController {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService) {
  }

  @Transactional()
  @Post()
  async assignRole(@Body() assignRoleDto: AssignRoleDto) {
    const dto = plainToClass(AssignRoleDto, assignRoleDto);
    const user = await this.userService.findOne(dto.userId);
    user.role = await this.roleService.findIds(dto.roles);
    return classToPlain(await this.userService.save(user))
  }
}