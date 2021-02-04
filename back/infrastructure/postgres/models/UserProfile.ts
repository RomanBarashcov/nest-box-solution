import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserProfile extends Model {
  @BelongsTo(() => User, 'fk_userId')
  @Column
  userId: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  mobile: string;
}
