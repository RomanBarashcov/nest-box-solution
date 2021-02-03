import { User } from '../../../infrastructure/postgres/models/User';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
}
