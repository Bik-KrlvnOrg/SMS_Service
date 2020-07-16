import { Repository, EntityRepository } from 'typeorm';
import { EsStaff } from '../entities/EsStaff';
import { CredentialDto, UserEntity } from '../auth/model/auth.model';

@EntityRepository(EsStaff)
export class StaffRepository extends Repository<EsStaff> {
  async getStaffWithCredential(credential: CredentialDto): Promise<EsStaff> {
    const { username, password } = credential;
    const staff = await this.findOne({
      where: {
        stUsername: username,
        stPassword: password,
        status: 'added',
        selstatus: 'accepted',
        tcstatus: 'notissued',
      },
    });

    return staff;
  }

  async getStaffWithPayload(payload: UserEntity): Promise<EsStaff> {
    const { username, id } = payload;
    const staff = await this.findOne({
      where: {
        esStaffid: id,
        stUsername: username,
        status: 'added',
        selstatus: 'accepted',
        tcstatus: 'notissued',
      },
    });

    return staff;
  }
}
