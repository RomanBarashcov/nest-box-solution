import { Injectable } from '@nestjs/common';
import { FinishedRegistration } from './messages/finished.registration';

@Injectable()
export class TemplateCreatorService {
  public createTemplateForFinishedRegistration(
    reciver: string,
    token: string,
  ): FinishedRegistration {
    const finishedRegistrationMessage = new FinishedRegistration();
    const link = `${process.env.APPLICATION_HOST}/activation/user?=token${token}`;

    finishedRegistrationMessage.receiverEmail = reciver;
    finishedRegistrationMessage.message = `Hello you are just registration on the box solution! Please select this ${link} for activation your account!`;

    return finishedRegistrationMessage;
  }
}
