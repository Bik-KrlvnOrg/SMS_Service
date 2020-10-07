import { Body, Controller, ForbiddenException, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { applyDateToString, AuthType, FindOptionsDto, setDateBetween } from '../../libs';
import { ResponseObject } from '../../model/response.model';
import { AttendanceService } from './attendance.service';
import { StaffAttendanceDto, StudentAttandanceDto } from './dto';

@Controller('attendance')
export class AttendanceController {
    constructor(private readonly service: AttendanceService) { }

    @UseGuards(AuthGuard())
    @Post('student')
    async createStudentAttendance(@GetUser() user: UserEntity, @Body() data: StudentAttandanceDto): Promise<ResponseObject<'data', any>> {
        if (user.type === AuthType.STUDENT) throw new ForbiddenException()
        const result = await this.service.createStudentAttendance(data).toPromise()
        return { data: { ...result } }
    }

    @UseGuards(AuthGuard())
    @Post('staff')
    async createStaffAttendance(@GetUser() user: UserEntity, @Body() data: StaffAttendanceDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException()
        const result = await this.service.createStaffAttendance(data).toPromise()
        return { data: { ...result } }
    }

    @Get('student')
    @UseGuards(AuthGuard())
    async getStudentAttendance(@GetUser() user: UserEntity, @Query() data: FindOptionsDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.STUDENT) throw new ForbiddenException()
        data.studentId = user.id
        data.fromDate = applyDateToString(data.fromDate)
        data.createdOn = setDateBetween(data.fromDate)
        const result = await this.service.getStudentsAttendance(data).toPromise()
        return { data: { success: true, studentAttendance: result } }
    }

    @Get('students')
    @UseGuards(AuthGuard())
    async getStudentsAttendance(@GetUser() user: UserEntity, @Query() data: FindOptionsDto) {
        if (user.type === AuthType.STUDENT) throw new ForbiddenException()
        data.fromDate = applyDateToString(data.fromDate)
        data.createdOn = setDateBetween(data.fromDate)
        const result = await this.service.getStudentsAttendance(data).toPromise()
        return { data: { success: true, studentAttendance: result } }
    }

    @Get('staff/single')
    @UseGuards(AuthGuard())
    async getSingleStaffAttendance(@GetUser() user: UserEntity, @Query() data: FindOptionsDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.STAFF) throw new ForbiddenException()
        data.staffId = user.id
        data.fromDate = applyDateToString(data.fromDate)
        data.createdOn = setDateBetween(data.fromDate)
        const result = await this.service.getStaffAttendance(data).toPromise()
        return { data: { success: true, staffAttendance: result } }
    }

    @Get('staff')
    @UseGuards(AuthGuard())
    async getStaffAttendance(@GetUser() user: UserEntity, @Query() data: FindOptionsDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException()
        data.fromDate = applyDateToString(data.fromDate)
        data.createdOn = setDateBetween(data.fromDate)
        const result = await this.service.getStaffAttendance(data).toPromise()
        return { data: { success: true, staffAttendance: result } }
    }

}
