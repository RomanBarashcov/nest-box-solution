import { Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { FinishedRegistration } from './messages/finished.registration';

@Injectable()
export class MailSenderService {
  constructor(
    @Inject('MailerService') private readonly mailService: MailerService,
  ) {}

  public async sendFinishedRegistrationMessage(
    data: FinishedRegistration,
  ): Promise<any> {
    try {
      return await this.mailService.sendMail({
        to: data.receiverEmail,
        from: 'noreply@nestjs.com', // sender address
        subject: data.subject, // Subject line
        text: data.message, // plaintext bodyt
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
