import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { UserEntity } from '../auth/model/auth.model';
import { StudentProfileResponse } from './model/student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async getProfile(payload: UserEntity): Promise<StudentProfileResponse> {
    const data = await this.studentRepository.getProfile(payload);
    if (!data) throw new NotFoundException('profile not found');
    const dto = data.toProfile();
    return dto;
  }
}
