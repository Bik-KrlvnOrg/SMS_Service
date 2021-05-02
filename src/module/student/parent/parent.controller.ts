import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto } from './dto';
import { UpdateParentDto } from './dto';

@Controller('students/parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  create(@Body() createParentDto: CreateParentDto) {
    return this.parentService.create(createParentDto);
  }

  @Get()
  findAll() {
    return this.parentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParentDto: UpdateParentDto) {
    return this.parentService.update(id, updateParentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentService.remove(id);
  }
}
