import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../../infrastructure/postgres/models/user';
import { IUserRepository } from './interfaces/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  private db: Sequelize;

  constructor(private sequelize: Sequelize) {
    this.db = sequelize;
  }

  async getAll(): Promise<User[]> {
    const users = await this.db.model(User).findAll();
    return users as User[];
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.db.model(User).findOne({ where: { id: id } });
    return user as User;
  }
}
