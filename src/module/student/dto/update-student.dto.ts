import { PartialType } from '@nestjs/mapped-types';
import { StudentEntity } from '../../../entities';

export class UpdateStudentDto extends PartialType(StudentEntity) {}
