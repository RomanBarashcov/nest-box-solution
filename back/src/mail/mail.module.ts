import { Module } from '@nestjs/common';

import { MailSenderService } from './mail.sender.service';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { TemplateCreatorService } from './template.creator.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com',
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: 'username',
          pass: 'password',
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
    }),
  ],
  providers: [MailSenderService, TemplateCreatorService],
  exports: [MailSenderService, TemplateCreatorService],
})
export class MailModule {}
