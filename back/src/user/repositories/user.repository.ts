import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../../../infrastructure/postgres/models/User';
import { IUserRepository } from '../interfaces/i.user.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  private db: Sequelize;

  constructor(private sequelize: Sequelize) {
    this.db = sequelize;
  }

  async findAll(): Promise<User[]> {
    const users = await this.db.model(User).findAll();
    return users as User[];
  }

  async findById(id: string): Promise<User> {
    const user = await this.db.model(User).findOne({ where: { id: id } });
    return user as User;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.db.model(User).findOne({ where: { email: email } });
    return user as User;
  }
  async create(user: User): Promise<User> {
    const createdUser = await this.db.model(User).create(user);
    return createdUser as User;
  }

  async update(user: User): Promise<User> {
    const userById = (await this.db
      .model(User)
      .findOne({ where: { id: user.id } })) as User;
    userById.isActive = user.isActive;
    userById.role = user.role;

    const updatedUser = await userById.save();
    return updatedUser;
  }
}
