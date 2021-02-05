import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class UserProfile extends Model {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User, 'UserId')
  user: User;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  mobile: string;
}
