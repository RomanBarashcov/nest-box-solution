import { Inject, Injectable } from '@nestjs/common';

import { UserEntity } from './entites/user.entity';
import { IUserRepository } from './interfaces/i.user.repository';

@Injectable()
export class UserFactory {
  public constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  public createUserObject(): UserEntity {
    const user = new UserEntity();
    user.setRepository(this.userRepository);
    return user;
  }
}
