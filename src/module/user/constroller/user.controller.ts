import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { plainToClass } from 'class-transformer';
import { CustomExceptionFilter } from '../../../libs/exception/filter/custom-exception.filter';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  @UseFilters(CustomExceptionFilter)
  create(@Body() createUserDto: CreateUserDto) {
    const dto = plainToClass(CreateUserDto, createUserDto);
    return this.userService.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }
  //


  @Get('/confirmation')
  confirmation(@Query('token') token: string) {
    return this.userService.confirmation(token);
  }
}
