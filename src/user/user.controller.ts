import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { GetHelloDTO } from './dto/getHello.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('name/:name')
  @ApiCreatedResponse({ type: GetHelloDTO })
  getHello(
    @Param('name') name: string,
    @Query('age') age: number,
  ): GetHelloDTO {
    return this.userService.getHello(name, age);
  }
}
