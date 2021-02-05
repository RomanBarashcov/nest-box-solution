import { Test, TestingModule } from '@nestjs/testing';

import { UserRepository } from '../repositories/user.repository';
import { AppModule } from '../../app.module';
import { User } from '../../../infrastructure/postgres/models/User';
import { RegistrationController } from './registration.controller';
import { UserFactory } from '../user.factory';
import { UserRegistrationService } from '../services/user.registration.service';
import { IUserRepository } from '../interfaces/i.user.repository';
import { MailSenderService } from '../../mail/mail.sender.service';
import { TemplateCreatorService } from '../../mail/template.creator.service';
import { RegistrationDto } from '../dtos/registration.dto';
import { MailModule } from '../../mail/mail.module';

describe('RegistrationController', () => {
  let controller: RegistrationController;
  let userRepository: IUserRepository;
  let userFactory: UserFactory;
  let userRegistrationService: UserRegistrationService;
  let mailSenderService: MailSenderService;
  let templateCreatorService: TemplateCreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, MailModule],
      controllers: [RegistrationController],
      providers: [
        UserRepository,
        UserFactory,
        UserRegistrationService,
        MailSenderService,
        TemplateCreatorService,
      ],
    }).compile();

    controller = module.get<RegistrationController>(RegistrationController);
    userRepository = module.get<UserRepository>(UserRepository);
    userFactory = module.get<UserFactory>(UserFactory);
    userRegistrationService = module.get<UserRegistrationService>(
      UserRegistrationService,
    );
    mailSenderService = module.get<MailSenderService>(MailSenderService);
    templateCreatorService = module.get<TemplateCreatorService>(
      TemplateCreatorService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(userFactory).toBeDefined();
    expect(userRegistrationService).toBeDefined();
    expect(mailSenderService).toBeDefined();
    expect(templateCreatorService).toBeDefined();
  });

  describe('registration', () => {
    it('should return a mock User', async () => {
      const output = new User();
      const input = new RegistrationDto();
      input.email = `some1@gmail.com`;
      input.password = `1234567890`;
      input.password = `1234567890`;

      jest
        .spyOn(userRegistrationService, 'executeRegistration')
        .mockImplementation(async () => output);

      const outResult = await userRegistrationService.executeRegistration(
        input,
      );
      expect(outResult).toBe(output);
    });
  });
});
