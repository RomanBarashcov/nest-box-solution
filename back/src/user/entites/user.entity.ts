import { IUserRepository } from '../interfaces/i.user.repository';
import { validate as validateEmail } from '../../../infrastructure/validators/emailValidator';
import { validate as validatePassword } from '../../../infrastructure/validators/passwordSequrityValidator';
import { User } from '../../../infrastructure/postgres/models/User';

export class UserEntity {
  private repository: IUserRepository;
  private user: User;

  public setRepository(userRep: IUserRepository): void {
    this.repository = userRep;
  }

  public new(id: string, email: string, isActive: boolean): void {
    this.user.id = id;
    this.user.email = email;
    this.user.isActive = isActive;
  }

  public setUserProfile(
    userId: string,
    firstName: string,
    lastName: string,
    mobile: string,
  ): void {
    this.user.userProfile.userId = userId;
    this.user.userProfile.firstName = firstName;
    this.user.userProfile.firstName = lastName;
    this.user.userProfile.mobile = mobile;
  }

  public setUserCredential(userId: string, password: string): void {
    this.user.userCredential.userId = userId;
    this.user.userCredential.password = password;
  }

  public async create(): Promise<User> {
    return await this.repository.create(this.user);
  }

  public async update(user: UserEntity): Promise<User> {
    return await this.repository.update(this.user);
  }
}
