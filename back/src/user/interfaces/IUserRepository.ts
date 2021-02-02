import { User } from '../../../infrastructure/postgres/models/User';

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
}
