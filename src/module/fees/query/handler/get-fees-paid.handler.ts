import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeesPaidRepository } from "../../repository";
import { GetFeesPaidQuery } from "../impl";
import { FeesPaidEntity } from "../../../../entities/EsFeepaid";

@QueryHandler(GetFeesPaidQuery)
export class GetFeesPaidHandler implements IQueryHandler<GetFeesPaidQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidRepository)
        private readonly feesRepository: FeesPaidRepository,
    ) { }

    async execute(query: GetFeesPaidQuery): Promise<FeesPaidEntity[]> {
        this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
        const { request } = query
        const fees = await this.feesRepository.find(request)
        return fees
    }

}