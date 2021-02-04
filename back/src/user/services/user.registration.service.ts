import { Inject, Injectable } from '@nestjs/common';

import { IUserRepository } from '../interfaces/i.user.repository';
import { User } from '../../../infrastructure/postgres/models/User';
import { IUserRegistrationService } from '../interfaces/i.user.registration.service';
import { RegistrationDto } from '../dtos/registration.dto';
import { UserFactory } from '../user.factory';
import * as activationTokenGenerator from '../../../infrastructure/generators/token.generator';
import { TemplateCreatorService } from '../../mail/template.creator.service';
import { MailSenderService } from '../../mail/mail.sender.service';

@Injectable()
export class UserRegistrationService implements IUserRegistrationService {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    @Inject('UserFactory') private userFactory: UserFactory,
    @Inject('MailSenderService') private mailSenderService: MailSenderService,
    @Inject('TemplateCreatorService')
    private templateCreatorService: TemplateCreatorService,
  ) {}

  async executeRegistration(registrationDto: RegistrationDto): Promise<User> {
    const userByEmail = this.userRepository.findByEmail(registrationDto.email);
    if (userByEmail) {
      throw 'User already exists!';
    }

    const activationToken = activationTokenGenerator.generate();
    const user = this.userFactory.createUserObject();

    user.new('', registrationDto.email, false);
    user.setUserCredential('', registrationDto.password);
    user.setUserActivationToken('', activationToken, false);

    const emailTemplate = this.templateCreatorService.createTemplateForFinishedRegistration(
      registrationDto.email,
      activationToken,
    );

    const sendResult = await this.mailSenderService.sendFinishedRegistrationMessage(
      emailTemplate,
    );

    return await user.save();
  }
}
