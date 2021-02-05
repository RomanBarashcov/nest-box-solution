export class UserAuthServiceEntity {
  public readonly id: string;
  public readonly userId: string;
  public readonly socialId: string;
  public readonly authType: string;

  constructor(id: string, userId: string, socialId: string, authType: string) {
    this.id = id;
    this.userId = userId;
    this.socialId = socialId;
    this.authType = this.setAuthType(authType);
  }

  private setAuthType(authType: string): string {
    const correctAuthType =
      authType === 'google' || authType === 'facebook' || authType === 'apple';

    if (correctAuthType) {
      return authType;
    }

    throw 'Incorrect user auth service type!';
  }
}
