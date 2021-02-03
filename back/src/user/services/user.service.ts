import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/i.user.repository';
import { IUserService } from '../interfaces/i.user.service';
import { User } from '../../../infrastructure/postgres/models/User';
import { UserFactory } from '../user.factory';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    @Inject('UserFactory') private userFactory: UserFactory,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findUserById(id: string): Promise<User> {
    return await this.userRepository.findById(id);
  }
}
