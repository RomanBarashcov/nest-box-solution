import { User } from '../../../infrastructure/postgres/models/user';

export interface IUserService {
  findAll(): Promise<User[]>;
  findUserById(id: string): Promise<User>;
}
