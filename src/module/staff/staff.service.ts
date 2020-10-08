import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { from, Observable } from 'rxjs';
import { CreateStaffCommand } from './command';
import { StaffDto } from './dto';
import { GetStaffProfileQuery } from './query';

@Injectable()
export class StaffService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus) { }

    createStaff(data: StaffDto): Observable<any> {
        return from(this.commandBus.execute(new CreateStaffCommand(data)))
    }

    getProfile(userId: number):Observable<any> {
        return from(this.queryBus.execute(new GetStaffProfileQuery(userId)))
    }


}
