import {Injectable} from '@nestjs/common';
import {EnrollmentRepository} from "./repository/enrollment.repository";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {CreateEnrollmentDto} from "./dto/create-enrollment.dto";

@Injectable()
export class EnrollmentService {
    constructor(private readonly enrollmentRepository: EnrollmentRepository) {
    }

    @Transactional()
    async create(createEnrollmentDto: CreateEnrollmentDto) {
        const entity = this.enrollmentRepository.create(createEnrollmentDto)
        return this.enrollmentRepository.save(entity)
    }

    async index() {
        return this.enrollmentRepository.find({});
    }

}
