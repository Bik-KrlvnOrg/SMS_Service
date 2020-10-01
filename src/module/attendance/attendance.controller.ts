import { Body, Controller, ForbiddenException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { AuthType } from '../../libs';
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
}
