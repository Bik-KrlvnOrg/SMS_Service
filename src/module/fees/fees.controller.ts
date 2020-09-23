import { Body, Controller, ForbiddenException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/decorator/get-user.decorator';
import { AuthType } from '../../auth/enum/auth.enum';
import { UserEntity } from '../../auth/model/auth.model';
import { ResponseObject } from '../../model/response.model';
import { FeesToPayDto } from './dto';
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
}
