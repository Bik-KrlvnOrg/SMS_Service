import { Repository, EntityRepository, Not } from 'typeorm';
import { EsPreadmission } from '../entities/EsPreadmission';
import { CredentialDto, AuthPayload } from '../auth/model/auth.model';
import { StudentProfileDto } from './model/student.model';
import { toSimpleShortDate } from '../utils/date-time.utils';

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

  async getStudentWithPayload(payload: AuthPayload): Promise<EsPreadmission> {
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

  async getProfile(payload: AuthPayload): Promise<StudentProfileDto> {
    const data = await this.getStudentWithPayload(payload);
    if (!data) return null;
    return this.applyProfileFormat(data);
  }

  private applyProfileFormat(data: EsPreadmission) {
    const personal = {
      username: data.preStudentUsername,
      name: data.preName,
      regNo: data.admissionId,
      class: data.preClass,
      gender: data.preGender,
      section: data.preSec,
      dob: toSimpleShortDate(data.preDateofbirth),
      avatar: data.preImage,
      bloodGroup: data.preBloodGroup,
      address: data.preAddress,
    };

    const parent = {
      father: data.preFathername,
      mother: data.preMothername,
      contact: data.preContactno,
      occupation: data.occupation1,
    };

    const dto: StudentProfileDto = { personal, parent };
    return dto;
  }
}
