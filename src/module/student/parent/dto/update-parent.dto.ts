import { PartialType } from '@nestjs/mapped-types';
import { CreateParentDto } from './create-parent.dto';

export class UpdateParentDto extends PartialType(CreateParentDto) {}
