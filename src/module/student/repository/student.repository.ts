import { InternalServerErrorException, Logger } from "@nestjs/common";
import { Repository, EntityRepository } from "typeorm";
import { CredentialDto, UserEntity } from "../../../auth/model/auth.model";
import { StudentEntity } from "../../../entities/EsPreadmission";
import { AdmissionDto } from "../dto/admission.dto";

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity>{
    logger = new Logger(this.constructor.name)
    async createAdmission(data: AdmissionDto): Promise<StudentEntity> {
        const dto: Omit<AdmissionDto, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)
    }

    async getStudentWithCredential(
        credential: { username: string, password: string },
    ): Promise<StudentEntity> {
        const { username, password } = credential;
        return this.findOne({ username, password })
    }

    async getStudentById(id: number): Promise<StudentEntity> {
        return this.findOne({ id });
    }

    async getProfile(id: number): Promise<StudentEntity> {
        return this.getStudentById(id)
    }
}