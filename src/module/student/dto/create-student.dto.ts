import { PartialType } from '@nestjs/mapped-types';
import { StudentEntity } from '../../../entities/student.entity';
import { Gender } from '../../../libs';
import { ParentEntity } from '../../../entities/parent.entity';

export class CreateStudentDto extends PartialType(StudentEntity) {
  first_name: string;
  last_name: string;
  contact: string;
  email: string;
  gender: Gender;
  date_of_birth: string;
}

export class CreateParentDto extends PartialType(ParentEntity){

}
