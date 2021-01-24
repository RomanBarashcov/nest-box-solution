import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/me')
  public GetInfo(): string {
    return 'Hello';
  }
}
