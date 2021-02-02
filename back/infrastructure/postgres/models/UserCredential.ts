import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserCredential extends Model {
  @Column
  @BelongsTo(() => User, 'userId')
  userId: string;

  @Column
  password: string;
}
