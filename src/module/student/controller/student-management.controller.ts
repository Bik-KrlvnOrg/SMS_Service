import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {StudentService} from '../student.service';
import {Permission} from '../../../libs';
import {RolePermission} from "../../decorator/permission.decorator";
import {CreateStudentDto} from "../dto/create-student.dto";

@Controller("students/management")
// @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
// @Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class StudentManagementController {
    constructor(private readonly studentService: StudentService) {
    }


    @Post()
    // @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
    // @RolePermission(Permission.CREATE)
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto);
    }

    @Delete(':id')
    @RolePermission(Permission.DELETE)
    remove(@Param('id') id: string) {
        return this.studentService.remove(id);
    }
}
