import { User } from '../../../infrastructure/postgres/models/user';

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
}
