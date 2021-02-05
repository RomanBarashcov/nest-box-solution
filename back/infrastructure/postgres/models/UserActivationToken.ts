import {BelongsTo, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserActivationToken extends Model {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User, 'UserId')
  user: User;

  @Column
  token: string;

  @Column
  isActive: boolean;
}
