import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { AuthType } from '../../libs';
import { ResponseObject } from '../../model/response.model';
import { AdmissionDto } from './dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly service: StudentService) { }

    @UseGuards(AuthGuard())
    @Post('admission')
    async createStudent(@GetUser() user: UserEntity, @Body() data: AdmissionDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException("you are not allowed")
        const result = await (await this.service.createStudent(data)).toPromise()
        return { data: { ...result } }

    }

    @UseGuards(AuthGuard())
    @Get('profile')
    async getProfile(@GetUser() user: UserEntity): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.STUDENT) throw new ForbiddenException()
        const result = await (await this.service.getProfile(user.id)).toPromise()
        return { data: { success: true, studentProfile: result } }
    }


}
