export class UserResetPasswordTokenEntity {
  public readonly id: string;
  public readonly userId: string;
  public readonly token: string;
  public readonly isActive: boolean;

  constructor(id: string, userId: string, token: string, isActive: boolean) {
    this.id = id;
    this.userId = userId;
    this.token = token;
    this.isActive = isActive;
  }
}
