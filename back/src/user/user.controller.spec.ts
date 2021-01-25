import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { AppModule } from '../app.module';
import { IUserService } from './interfaces/IUserService';
import { User } from '../../infrastructure/postgres/models/user';

describe('UserController', () => {
  let controller: UserController;
  let userService: IUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [UserController],
      providers: [UserRepository, UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('shuld be return first user by default', () => {});

  describe('findUserById', () => {
    it('should return a mock User', async () => {
      const result = new User();

      jest
        .spyOn(userService, 'findUserById')
        .mockImplementation(async () => result);

      expect(await userService.findUserById(`1`)).toBe(result);
    });
  });
});
