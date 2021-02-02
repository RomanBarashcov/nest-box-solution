import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserAuthService extends Model {
  @Column
  @BelongsTo(() => User, 'userId')
  userId: string;

  @Column
  socialId: string;

  @Column(DataType.ENUM)
  authType: string;
}
