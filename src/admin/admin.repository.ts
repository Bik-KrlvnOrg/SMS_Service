import { Repository, EntityRepository } from 'typeorm';
import { EsAdmins } from '../entities/EsAdmins';
import { CredentialDto, AuthPayload } from '../auth/model/auth.model';

@EntityRepository(EsAdmins)
export class AdminRepository extends Repository<EsAdmins> {
  async getAdminWithCredential(credential: CredentialDto): Promise<EsAdmins> {
    const { username, password } = credential;
    const admin = await this.findOne({
      where: {
        adminUsername: username,
        adminPassword: password,
      },
    });

    return admin;
  }

  async getAdminWithPayload(payload: AuthPayload): Promise<EsAdmins> {
    const { username, id } = payload;
    const admin = await this.findOne({
      where: { esAdminsid: id, adminUsername: username },
    });

    return admin;
  }
}
