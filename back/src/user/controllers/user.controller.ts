import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IUserService } from '../interfaces/i.user.service';
import { User } from '../../../infrastructure/postgres/models/User';

@Controller('user')
export class UserController {
  constructor(@Inject('UserService') private userService: IUserService) {}

  @Get('/find/all')
  public async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('/me/:id')
  public async getInfo(@Param('id') id: string): Promise<User> {
    console.log('id param result', id);
    const userId = 'c3e854ae-c251-4f63-84a8-7a1f6cc2c32d';
    return await this.userService.findUserById(userId);
  }
}
