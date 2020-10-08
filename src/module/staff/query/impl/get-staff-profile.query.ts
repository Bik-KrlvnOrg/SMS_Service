import { IQuery } from "@nestjs/cqrs";

export class GetStaffProfileQuery implements IQuery { 
    constructor(public readonly request:number){}
}