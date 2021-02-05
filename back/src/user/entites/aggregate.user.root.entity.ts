import { UserEntity } from './user.entity';
import { UserProfileEntity } from './user.profile.entity';
import { UserCredentialEntity } from './user.credential.entity';
import { UserActivationTokenEntity } from './user.activation.token.entity';
import { UserAuthServiceEntity } from './user.auth.service.entity';
import { UserResetPasswordTokenEntity } from './user.reset.password.token.entity';

export class AggregateUserRootEntity {
  public user: UserEntity;
  public userProfile: UserProfileEntity;
  public userCredential: UserCredentialEntity;
  public userActivationToken: UserActivationTokenEntity;
  public userAuthService: UserAuthServiceEntity;
  public userResetPasswordToken: UserResetPasswordTokenEntity;

  public setUser(
    id: string,
    email: string,
    isActive: boolean,
    role: string,
  ): void {
    this.user = new UserEntity(id, email, isActive, role);
  }

  public setUserProfile(
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    mobile: string,
  ): void {
    this.userProfile = new UserProfileEntity(
      id,
      userId,
      firstName,
      lastName,
      mobile,
    );
  }

  public setUserCredential(id: string, userId: string, password: string): void {
    this.userCredential = new UserCredentialEntity(id, userId, password);
  }

  public setUserActivationToken(
    id: string,
    userId: string,
    token: string,
    isActive: boolean,
  ): void {
    this.userActivationToken = new UserActivationTokenEntity(
      id,
      userId,
      token,
      isActive,
    );
  }

  public setAuthService(
    id: string,
    userId: string,
    socialId: string,
    authType: string,
  ) {
    this.userAuthService = new UserAuthServiceEntity(
      id,
      userId,
      socialId,
      authType,
    );
  }

  public setResetPasswordToken(
    id: string,
    userId: string,
    token: string,
    isActive: boolean,
  ) {
    this.userResetPasswordToken = new UserResetPasswordTokenEntity(
      id,
      userId,
      token,
      isActive,
    );
  }
}
