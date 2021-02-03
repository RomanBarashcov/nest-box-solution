import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/i.user.repository';
import { User } from '../../../infrastructure/postgres/models/User';
import { IUserRegistrationService } from '../interfaces/i.user.registration.service';
import { RegistrationDto } from '../dtos/registration.dto';
import { UserFactory } from '../user.factory';

@Injectable()
export class UserRegistrationService implements IUserRegistrationService {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    @Inject('UserFactory') private userFactory: UserFactory,
  ) {}

  async executeRegistration(registrationDto: RegistrationDto): Promise<User> {
    const userByEmail = this.userRepository.findByEmail(registrationDto.email);
    if (userByEmail) {
      throw 'User already exists!';
    }

    const user = this.userFactory.createUserObject();
    user.new('', registrationDto.email, false);
    user.setUserCredential('', registrationDto.password);

    return await user.create();
  }
}
