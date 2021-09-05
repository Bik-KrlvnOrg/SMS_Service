import { Body, Controller, Get, Post, Query, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from '../service';
import { CreateUserDto, LoginUserDto } from '../dto';
import { plainToClass } from 'class-transformer';
import { CustomExceptionFilter, Role } from '../../../libs';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, Roles } from '../../decorator';
import { UserPayload } from '../../security/strategy';
import { RolesGuard } from '../../security/guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('register')
  @UseFilters(CustomExceptionFilter)
  create(@Body() createUserDto: CreateUserDto) {
    const dto = plainToClass(CreateUserDto, createUserDto);
    return this.userService.create(dto);
  }

  @Post('login')
  @UseFilters(CustomExceptionFilter)
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.usernameAndPassword(loginUserDto);
  }


  @Get('/confirmation')
  confirmation(@Query('token') token: string) {
    return this.userService.confirmation(token);
  }

  @Get()
  index() {
    return this.userService.findAll();
  }

  @Get('/test')
  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @Roles(Role.ADMIN)
  justTesting(@GetUser() data: UserPayload) {
    return data
  }
}
