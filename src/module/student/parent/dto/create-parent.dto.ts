import { Gender, ParentType } from '../../../../libs';

export class CreateParentDto {
  first_name: string;
  last_name: string;
  contact: string;
  email: string;
  type: ParentType;
  gender: Gender;
  student_id: number;
}
