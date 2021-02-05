import { User } from '../../../infrastructure/postgres/models/User';
import { AggregateUserRootEntity } from '../entites/aggregate.user.root.entity';
import { Inject, Injectable } from '@nestjs/common';
import { UserFactory } from '../user.factory';

@Injectable()
export class UserMapper {
  private userModel: User;
  private aggregatorUserRootEntity: AggregateUserRootEntity;

  constructor(
    @Inject('UserFactory') userFactory: UserFactory,
    @Inject('AggregateUserRootEntity')
    aggregatorUserRootEntity: AggregateUserRootEntity,
  ) {
    this.userModel = userFactory.createUserObject();
    this.aggregatorUserRootEntity = aggregatorUserRootEntity;
  }

  public userEntityMapToUserModel() {
    this.userModel.id = this.aggregatorUserRootEntity.user.id;
    this.userModel.email = this.aggregatorUserRootEntity.user.email;
    this.userModel.role = this.aggregatorUserRootEntity.user.role;
    this.userModel.isActive = this.aggregatorUserRootEntity.user.isActive;
  }

  public userProfileEntityMapToUserProfileModel() {
    this.userModel.userProfile.id = this.aggregatorUserRootEntity.userProfile.id;
    this.userModel.userProfile.userId = this.aggregatorUserRootEntity.userProfile.userId;
    this.userModel.userProfile.firstName = this.aggregatorUserRootEntity.userProfile.firstName;
    this.userModel.userProfile.lastName = this.aggregatorUserRootEntity.userProfile.lastName;
    this.userModel.userProfile.mobile = this.aggregatorUserRootEntity.userProfile.mobile;
  }

  public userCredentialEntityMapToUserCredentialModel() {
    this.userModel.userCredential.id = this.aggregatorUserRootEntity.userCredential.id;
    this.userModel.userCredential.userId = this.aggregatorUserRootEntity.userCredential.userId;
    this.userModel.userCredential.password = this.aggregatorUserRootEntity.userCredential.password;
  }

  public userActivationTokenEntityMapToUserActivationTokenModel() {
    this.userModel.userActivationToken.id = this.aggregatorUserRootEntity.userActivationToken.id;
    this.userModel.userActivationToken.userId = this.aggregatorUserRootEntity.userActivationToken.userId;
    this.userModel.userActivationToken.token = this.aggregatorUserRootEntity.userActivationToken.token;
    this.userModel.userActivationToken.isActive = this.aggregatorUserRootEntity.userActivationToken.isActive;
  }

  public userAuthServiceEntityMapToUserAuthServiceModel() {
    this.userModel.userAuthService.id = this.aggregatorUserRootEntity.userAuthService.id;
    this.userModel.userAuthService.userId = this.aggregatorUserRootEntity.userAuthService.userId;
    this.userModel.userAuthService.socialId = this.aggregatorUserRootEntity.userAuthService.socialId;
    this.userModel.userAuthService.authType = this.aggregatorUserRootEntity.userAuthService.authType;
  }

  public userResetPasswordTokenEntityMapToUserResetPasswordTokenModel() {
    this.userModel.userResetPasswordToken.id = this.aggregatorUserRootEntity.userResetPasswordToken.id;
    this.userModel.userResetPasswordToken.userId = this.aggregatorUserRootEntity.userResetPasswordToken.userId;
    this.userModel.userResetPasswordToken.token = this.aggregatorUserRootEntity.userResetPasswordToken.token;
    this.userModel.userResetPasswordToken.isActive = this.aggregatorUserRootEntity.userResetPasswordToken.isActive;
  }
}
