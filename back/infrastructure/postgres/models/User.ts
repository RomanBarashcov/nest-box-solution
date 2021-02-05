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

  @HasOne(() => UserProfile)
  userProfile: UserProfile;

  @HasOne(() => UserCredential)
  userCredential: UserCredential;

  @HasOne(() => UserActivationToken)
  userActivationToken: UserActivationToken;

  @HasOne(() => UserAuthService)
  userAuthService: UserAuthService;

  @HasOne(() => UserResetPasswordToken)
  userResetPasswordToken: UserResetPasswordToken;
}
