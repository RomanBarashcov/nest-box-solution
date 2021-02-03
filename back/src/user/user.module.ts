import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { UserRegistrationService } from './services/user.registration.service';
import { UserFactory } from './user.factory';

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    UserFactory,
    UserService,
    UserRegistrationService,
  ],
})
export class UserModule {}
