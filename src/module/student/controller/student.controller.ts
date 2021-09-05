import {Body, Controller, Get, Param, Patch, UseGuards} from '@nestjs/common';
import {StudentService} from '../student.service';
import {UpdateStudentDto} from '../dto';
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../../security/guard";
import {PermissionsGuard} from "../../security/guard/permissions.guard";
import {Roles} from "../../decorator";
import {Permission, Role} from "../../../libs";
import {RolePermission} from "../../decorator/permission.decorator";

@Controller('students')
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.PRIMARY, Role.BILLING)
export class StudentController {
    constructor(private readonly studentService: StudentService) {
    }

    @Get()
    findAll() {
        return this.studentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentService.findOne(id);
    }

    @Patch(':id')
    @RolePermission(Permission.EDIT)
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return this.studentService.update(id, updateStudentDto);
    }

}
