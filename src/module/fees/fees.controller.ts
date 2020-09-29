import { Body, Controller, ForbiddenException, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { UserEntity } from '../../auth/model/auth.model';
import { AuthType } from '../../libs';
import { ResponseObject } from '../../model/response.model';
import { FeesToPayDto, FindFeesPaidDto } from './dto';
import { FeesService } from './fees.service';

@Controller('fees')
export class FeesController {
    constructor(private readonly service: FeesService) { }

    @UseGuards(AuthGuard())
    @Post('pay')
    async payFees(@GetUser() user: UserEntity, @Body() dto: FeesToPayDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException("You don't have access")
        const result = await (await this.service.payFees(dto)).toPromise()
        return { data: { success: true, ...result } }
    }

    @UseGuards(AuthGuard())
    @Get('student')
    async getStudentFeesPaid(@GetUser() user: UserEntity,@Query() dto:FindFeesPaidDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.STUDENT) throw new ForbiddenException("You don't have access")
        dto.studentId = user.id
        const result = await (await this.service.getStudentFeesPaid(dto)).toPromise()
        return { data: { success: true, feesPaid: result } }
    }

    @UseGuards(AuthGuard())
    @Get('paid')
    async getFeesPaid(@GetUser() user: UserEntity,@Query() dto: FindFeesPaidDto): Promise<ResponseObject<'data', any>> {
        if (user.type !== AuthType.ADMIN) throw new ForbiddenException("You don't have access")
        const result = await (await this.service.getStudentFeesPaid(dto)).toPromise()
        return { data: { success: true, feesPaid: result } }
    }
}
