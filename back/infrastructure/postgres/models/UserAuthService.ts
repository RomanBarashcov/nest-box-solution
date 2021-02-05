import {
  BelongsTo,
  Column,
  DataType, ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserAuthService extends Model {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User, 'UserId')
  user: User;

  @Column
  socialId: string;

  @Column(DataType.ENUM('google', 'facebook', 'apple'))
  authType: string;
}
