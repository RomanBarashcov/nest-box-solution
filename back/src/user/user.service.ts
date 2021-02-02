import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './interfaces/IUserRepository';
import { IUserService } from './interfaces/IUserService';
import { User } from '../../infrastructure/postgres/models/User';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async findUserById(id: string): Promise<User> {
    return await this.userRepository.getUserById(id);
  }
}
