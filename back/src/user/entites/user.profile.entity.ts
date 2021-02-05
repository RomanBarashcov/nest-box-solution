export class UserProfileEntity {
  public readonly id: string;
  public readonly userId: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly mobile: string;

  constructor(
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    mobile: string,
  ) {
    this.id = id;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobile = mobile;
  }
}
