import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { AuthPayload } from '../auth/model/auth.model';
import { StudentProfileDto } from './model/student.model';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(StudentRepository) private studentRepository:StudentRepository){}

   async getProfile(payload:AuthPayload):Promise<StudentProfileDto>{
        return this.studentRepository.getProfile(payload)
    }
}
