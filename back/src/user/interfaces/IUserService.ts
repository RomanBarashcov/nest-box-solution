import { User } from '../../../infrastructure/postgres/models/User';

export interface IUserService {
  findAll(): Promise<User[]>;
  findUserById(id: string): Promise<User>;
}
