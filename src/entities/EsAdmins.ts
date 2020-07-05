import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, classToPlain } from 'class-transformer';

@Entity('es_admins', { schema: 'school' })
export class EsAdmins {
  @PrimaryGeneratedColumn({ type: 'int', name: 'es_adminsid' })
  esAdminsid: number;

  @Column('varchar', { name: 'admin_username', length: 255 })
  adminUsername: string;

  @Exclude()
  @Column('varchar', { name: 'admin_password', length: 255 })
  adminPassword: string;

  @Column('varchar', { name: 'admin_fname', length: 255 })
  adminFname: string;

  @Column('enum', { name: 'user_type', enum: ['super', 'admin'] })
  userType: 'super' | 'admin';

  @Column('varchar', {
    name: 'user_theme',
    length: 255,
    default: () => "'pink.css'",
  })
  userTheme: string;

  @Column('varchar', { name: 'admin_lname', length: 255 })
  adminLname: string;

  @Column('varchar', { name: 'admin_email', length: 255 })
  adminEmail: string;

  @Column('varchar', { name: 'admin_phoneno', length: 255 })
  adminPhoneno: string;

  @Column('text', { name: 'admin_more' })
  adminMore: string;

  @Column('text', { name: 'admin_permissions' })
  adminPermissions: string;

  toJSON() {
    return classToPlain(this);
  }
}
