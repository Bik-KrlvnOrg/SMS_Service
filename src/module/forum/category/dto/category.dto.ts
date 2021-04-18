import { IsNotEmpty, Max } from 'class-validator';

export class CategoryInput {
  @IsNotEmpty({ message: 'name is required' })
  @Max(50)
  name: string;
  description: string;
}