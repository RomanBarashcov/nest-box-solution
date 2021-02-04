import { IUserRepository } from '../interfaces/i.user.repository';
import { validate as validateEmail } from '../../../infrastructure/validators/emailValidator';
import { validate as validatePassword } from '../../../infrastructure/validators/passwordSequrityValidator';
import { User } from '../../../infrastructure/postgres/models/User';

export class UserEntity {
  private _repository: IUserRepository;
  private _user: User;

  get user(): User {
    return this._user;
  }

  public setRepository(userRep: IUserRepository): void {
    this._repository = userRep;
  }

  public new(id: string, email: string, isActive: boolean): void {
    this._user.id = id;
    this._user.email = this.setUserEmail(email);
    this._user.isActive = isActive;
  }

  public setUserProfile(
    userId: string,
    firstName: string,
    lastName: string,
    mobile: string,
  ): void {
    this._user.userProfile.userId = userId;
    this._user.userProfile.firstName = firstName;
    this._user.userProfile.firstName = lastName;
    this._user.userProfile.mobile = mobile;
  }

  public setUserCredential(userId: string, password: string): void {
    this._user.userCredential.userId = userId;
    this._user.userCredential.password = this.setUserPassword(password);
  }

  public setUserAuthApproach(
    userId: string,
    socialId: string,
    authType: string,
  ) {
    this._user.userAuthService.userId = userId;
    this._user.userAuthService.socialId = socialId;
    this._user.userAuthService.authType = authType;
  }

  public setUserActivationToken(
    userId: string,
    token: string,
    isActive: boolean,
  ) {
    this._user.userActivationToken.userId = userId;
    this._user.userActivationToken.token = token;
    this._user.userActivationToken.isActive = isActive;
  }

  private setUserEmail(email: string): string {
    if (validateEmail(email)) {
      return email;
    }

    throw 'Email does not valid!';
  }

  private setUserPassword(password: string): string {
    if (validatePassword(password)) {
      return password;
    }

    throw 'Password does not valid!';
  }

  public async save(): Promise<User> {
    return await this._repository.create(this._user);
  }

  public async update(): Promise<User> {
    return await this._repository.update(this._user);
  }
}
