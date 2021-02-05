import { Inject, Injectable } from '@nestjs/common';

import { IUserRepository } from './interfaces/i.user.repository';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../infrastructure/postgres/models/User';
import { UserProfile } from '../../infrastructure/postgres/models/UserProfile';
import { UserActivationToken } from '../../infrastructure/postgres/models/UserActivationToken';
import { UserResetPasswordToken } from '../../infrastructure/postgres/models/UserResetPasswordToken';
import { UserAuthService } from '../../infrastructure/postgres/models/UserAuthService';
import { UserCredential } from '../../infrastructure/postgres/models/UserCredential';

@Injectable()
export class UserFactory {
  public constructor(
    @InjectModel(User) private user: User,
    @InjectModel(UserProfile) private userProfile: UserProfile,
    @InjectModel(UserActivationToken)
    private userActivationToken: UserActivationToken,
    @InjectModel(UserResetPasswordToken)
    private userResetPasswordToken: UserResetPasswordToken,
    @InjectModel(UserAuthService) private userAuthService: UserAuthService,
    @InjectModel(UserCredential) private userCredential: UserCredential,
    @Inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  public createUserObject(): User {
    this.user.userProfile = this.userProfile;
    this.user.userActivationToken = this.userActivationToken;
    this.user.userResetPasswordToken = this.userResetPasswordToken;
    this.user.userAuthService = this.userAuthService;
    this.user.userCredential = this.userCredential;

    return this.user;
  }
}
