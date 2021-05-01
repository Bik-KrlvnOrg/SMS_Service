import { Body, Controller, Get, Post, Query, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { plainToClass } from 'class-transformer';
import { CustomExceptionFilter } from '../../../libs/exception/filter/custom-exception.filter';
import { LoginUserDto } from '../dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../decorator/user.decorator';
import { UserPayload } from '../../security/strategy/jwt.strategy';

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
  @UseGuards(AuthGuard('jwt'))
  justTesting(@GetUser() data: UserPayload) {
    return data
  }
}
