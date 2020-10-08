import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { AuthType } from '../../libs';
import { ResponseObject } from '../../model/response.model';
import { StaffDto } from './dto';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
    constructor(private readonly service: StaffService) { }


    @UseGuards(AuthGuard())
    @Post()
    async createStaff(@GetUser() user: UserEntity, @Body() data: StaffDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException()
        const result = await this.service.createStaff(data).toPromise()
        return { data: { success: true, ...result } }
    }

    @UseGuards(AuthGuard())
    @Get('profile')
    async getProfile(@GetUser() user: UserEntity): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.STAFF) throw new ForbiddenException()
        const result = await this.service.getProfile(user.id).toPromise()
        return { data: { staffProfile: result } }
    }
}
