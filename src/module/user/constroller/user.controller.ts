import {Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseFilters, UseGuards} from '@nestjs/common';
import {UserService} from '../service';
import {AssignRoleDto, CreateUserDto, LoginUserDto} from '../dto';
import {plainToClass} from 'class-transformer';
import {CustomExceptionFilter, Permission, Role} from '../../../libs';
import {AuthGuard} from '@nestjs/passport';
import {GetUser, Roles} from '../../decorator';
import {UserPayload} from '../../security/strategy';
import {RolesGuard} from '../../security/guard';
import {RolePermission} from "../../decorator/permission.decorator";
import {PermissionsGuard} from "../../security/guard/permissions.guard";
import {RoleService} from "../../role/role.service";

@Controller('users')
@UseFilters(CustomExceptionFilter)
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly roleService: RoleService
    ) {
    }


    @Post('register')
    @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
    @RolePermission(Permission.CREATE)
    create(@Body() createUserDto: CreateUserDto) {
        const dto = plainToClass(CreateUserDto, createUserDto);
        return this.userService.create(dto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.usernameAndPassword(loginUserDto);
    }


    @Get('/confirmation')
    confirmation(@Query('token') token: string) {
        return this.userService.confirmation(token);
    }

    @Get()
    index() {
        return this.userService.findAll();
    }

    @Post('/assign-role')
    @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
    @RolePermission(Permission.CREATE)
    @HttpCode(HttpStatus.NO_CONTENT)
    async assignRole(@Body() assignRoleDto: AssignRoleDto) {
        const dto = plainToClass(AssignRoleDto, assignRoleDto);
        const user = await this.userService.findOne(dto.userId);
        user.role = await this.roleService.findIds(dto.roles);
        await this.userService.save(user)
    }

    @Get('/test')
    @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
    @Roles(Role.SUPER_ADMIN)
    @RolePermission(Permission.VIEW)
    justTesting(@GetUser() data: UserPayload) {
        return data
    }
}
