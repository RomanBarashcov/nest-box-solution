import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { UserRegistrationService } from './services/user.registration.service';
import { UserFactory } from './user.factory';
import { RegistrationController } from './controllers/registration.controller';
import { MailModule } from '../mail/mail.module';
import { InjectModel, SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../infrastructure/postgres/models/User';
import { UserProfile } from '../../infrastructure/postgres/models/UserProfile';
import { UserResetPasswordToken } from '../../infrastructure/postgres/models/UserResetPasswordToken';
import { UserAuthService } from '../../infrastructure/postgres/models/UserAuthService';
import { UserCredential } from '../../infrastructure/postgres/models/UserCredential';
import { UserActivationToken } from '../../infrastructure/postgres/models/UserActivationToken';

@Module({
  imports: [
    MailModule,
    SequelizeModule.forFeature([
      User,
      UserProfile,
      UserActivationToken,
      UserResetPasswordToken,
      UserAuthService,
      UserCredential,
    ]),
  ],
  controllers: [UserController, RegistrationController],
  providers: [
    UserRepository,
    UserFactory,
    UserService,
    UserRegistrationService,
  ],
})
export class UserModule {}
