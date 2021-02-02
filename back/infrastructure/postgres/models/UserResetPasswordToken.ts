import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserResetPasswordToken extends Model {
  @Column
  @BelongsTo(() => User, 'userId')
  userId: string;

  @Column
  token: string;

  @Column
  isActive: boolean;
}
