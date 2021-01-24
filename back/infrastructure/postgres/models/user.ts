import {
  PrimaryKey,
  IsEmail,
  Column,
  Model,
  Table,
  IsDate,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @IsEmail
  @Column
  email: string;
}
