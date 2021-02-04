import {
  IsEmail,
  Column,
  Model,
  Table,
  HasOne,
  DataType,
  Unique,
  BelongsTo,
} from 'sequelize-typescript';

import { UserActivationToken } from './UserActivationToken';
import { UserAuthService } from './UserAuthService';
import { UserCredential } from './UserCredential';
import { UserResetPasswordToken } from './UserResetPasswordToken';
import { UserProfile } from './UserProfile';

@Table
export class User extends Model {
  @IsEmail
  @Column
  email: string;

  @Column
  isActive: boolean;

  @Column(DataType.ENUM('user', 'admin'))
  role: string;

  @HasOne(() => UserProfile, 'fk_userId')
  userProfile: UserProfile;

  @HasOne(() => UserActivationToken, 'userId')
  userActivationToken: UserActivationToken;

  @HasOne(() => UserResetPasswordToken, 'userId')
  userResetPasswordToken: UserResetPasswordToken;

  @HasOne(() => UserAuthService, 'userId')
  userAuthService: UserAuthService;

  @HasOne(() => UserCredential, 'userId')
  userCredential: UserCredential;

}
