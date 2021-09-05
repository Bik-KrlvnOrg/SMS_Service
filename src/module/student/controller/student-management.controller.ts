import {Body, Controller, Delete, Param, Post, UseGuards} from '@nestjs/common';
import {StudentService} from '../student.service';
import {AuthGuard} from '@nestjs/passport';
import {RolesGuard} from '../../security/guard';
import {Roles} from '../../decorator';
import {Permission, Role} from '../../../libs';
import {StudentEntity} from '../../../entities';
import {RolePermission} from "../../decorator/permission.decorator";
import {PermissionsGuard} from "../../security/guard/permissions.guard";

@Controller("students/management")
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class StudentManagementController {
    constructor(private readonly studentService: StudentService) {
    }


    @Post()
    @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
    @RolePermission(Permission.CREATE)
    create(@Body() studentEntity: StudentEntity) {
        return this.studentService.create(studentEntity);
    }

    @Delete(':id')
    @RolePermission(Permission.DELETE)
    remove(@Param('id') id: string) {
        return this.studentService.remove(id);
    }
}