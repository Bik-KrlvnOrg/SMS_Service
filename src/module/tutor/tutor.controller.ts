import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {TutorService} from "./tutor.service";
import {AssignSubjectDto} from "./dto/assign-subject.dto";
import {RemoveAddressDto} from "./dto/remove-address.dto";
import {RemoveSubjectDto} from "./dto/remove-subject.dto";
import {CreateTutorDto} from "./dto/create-tutor.dto";
import {AssignUserDto} from "./dto/assign-user.dto";
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../security/guard";
import {Roles} from "../decorator";
import {Permission, Role} from "../../libs";
import {PermissionsGuard} from "../security/guard/permissions.guard";
import {RolePermission} from "../decorator/permission.decorator";

@Controller('tutors')
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
export class TutorController {
    constructor(private readonly tutorService: TutorService) {
    }

    @Post()
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    async createTutor(@Body() createTutorDto: CreateTutorDto) {
        return this.tutorService.create(createTutorDto)
    }

    @Get()
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    async index() {
        return this.tutorService.get();
    }

    @Get(':id')
    @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.PRIMARY)
    async getOne(@Param('id') tutorId: string) {
        return this.tutorService.getOne(tutorId);
    }

    @Post(':id/assign-user')
    @HttpCode(HttpStatus.NO_CONTENT)
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    async assignUser(@Param('id') tutorId: string, @Body() assignUserDto: AssignUserDto) {
        assignUserDto.tutorId = tutorId;
        return this.tutorService.assignUser(assignUserDto);
    }

    @Post(':id/assign-subject')
    @HttpCode(HttpStatus.NO_CONTENT)
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    @RolePermission(Permission.EDIT)
    async assignSubject(@Param('id') tutorId: string, @Body() assignSubjectDto: AssignSubjectDto) {
        assignSubjectDto.tutorId = tutorId;
        return this.tutorService.assignSubject(assignSubjectDto);
    }

    @Delete(':id/remove-subject')
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    @RolePermission(Permission.DELETE)
    @HttpCode(HttpStatus.NO_CONTENT)
    async removeSubject(@Param('id') tutorId: string, @Body() removeSubjectDto: RemoveSubjectDto) {
        removeSubjectDto.tutorId = tutorId;
        return this.tutorService.removeSubject(removeSubjectDto);
    }

    @Delete(':id/remove-address')
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    @RolePermission(Permission.DELETE)
    @HttpCode(HttpStatus.NO_CONTENT)
    async removeAddress(@Param('id') tutorId: string, @Body() removeAddressDto: RemoveAddressDto) {
        removeAddressDto.tutorId = tutorId;
        return this.tutorService.removeAddress(removeAddressDto);
    }

    @Delete(':id')
    @Roles(Role.SUPER_ADMIN, Role.ADMIN)
    @RolePermission(Permission.DELETE)
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteTutor(@Param('id') tutorId: string) {
        return this.tutorService.delete(tutorId);
    }
}
