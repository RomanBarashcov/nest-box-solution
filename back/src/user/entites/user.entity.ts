import { validate as validateEmail } from '../../../infrastructure/validators/emailValidator';
import { validate as validatePassword } from '../../../infrastructure/validators/passwordSequrityValidator';

export class UserEntity {
  public readonly id: string;
  public readonly email: string;
  public readonly isActive: boolean;
  public readonly role: string;

  constructor(id: string, email: string, isActive: boolean, role: string) {
    this.id = id;
    this.email = this.setUserEmail(email);
    this.isActive = isActive;
    this.role = this.setRole(role);
  }

  private setUserEmail(email: string): string {
    if (validateEmail(email)) {
      return email;
    }

    throw 'Email does not valid!';
  }

  private setRole(role: string): string {
    const correctRole = role == 'user' || role == 'admin';
    if (correctRole) {
      return role;
    }

    throw 'User role does not valid!';
  }
}
