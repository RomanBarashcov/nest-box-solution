import { Controller, Inject, Param, Post } from '@nestjs/common';

import { User } from '../../../infrastructure/postgres/models/User';
import { IUserRegistrationService } from '../interfaces/i.user.registration.service';
import { RegistrationDto } from '../dtos/registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(
    @Inject('UserRegistrationService')
    private registrationService: IUserRegistrationService,
  ) {}

  @Post('/')
  public async registration(
    @Param('registrationDto') registrationDto: RegistrationDto,
  ): Promise<User> {
    return await this.registrationService.executeRegistration(registrationDto);
  }
}
