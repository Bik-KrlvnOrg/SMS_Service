import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { ResponseObject } from '../../model/response.model';
import { StaffDto } from './dto';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
    constructor(private readonly service: StaffService) { }


    @Post()
    async createStaff(@Body() data: StaffDto): Promise<ResponseObject<'data', any>> {
        const result = await this.service.createStaff(data).toPromise()
        return { data: { success: true, ...result } }
    }

    @UseGuards(AuthGuard())
    @Get('profile')
    async getProfile(@GetUser() user: UserEntity): Promise<ResponseObject<'data', any>> {
        const result = await this.service.getProfile(user.id).toPromise()
        return { data: { staffProfile: result } }
    }
}
