import { validate as validatePassword } from '../../../infrastructure/validators/passwordSequrityValidator';

export class UserCredentialEntity {
  id: string;
  userId: string;
  password: string;

  constructor(id: string, userId: string, password: string) {
    this.id = id;
    this.userId = userId;
    this.password = this.setUserPassword(password);
  }

  private setUserPassword(password: string): string {
    if (validatePassword(password)) {
      return password;
    }

    throw 'Password does not valid!';
  }
}
