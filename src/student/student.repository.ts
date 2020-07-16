import { Repository, EntityRepository, Not } from 'typeorm';
import { EsPreadmission } from '../entities/EsPreadmission';
import { CredentialDto, UserEntity } from '../auth/model/auth.model';
import { StudentProfileResponse } from './model/student.model';

@EntityRepository(EsPreadmission)
export class StudentRepository extends Repository<EsPreadmission> {
  async getStudentWithCredential(
    credential: CredentialDto,
  ): Promise<EsPreadmission> {
    const { username, password } = credential;
    const student = await this.findOne({
      where: {
        preStudentUsername: username,
        preStudentPassword: password,
        status: Not('inactive'),
      },
    });

    return student;
  }

  async getStudentWithPayload(payload: UserEntity): Promise<EsPreadmission> {
    const { username, id } = payload;
    const student = await this.findOne({
      where: {
        esPreadmissionid: id,
        preStudentUsername: username,
        status: Not('inactive'),
      },
    });
    return student;
  }

  async getProfile(payload: UserEntity): Promise<EsPreadmission> {
    return this.getStudentWithPayload(payload);
  }
}
