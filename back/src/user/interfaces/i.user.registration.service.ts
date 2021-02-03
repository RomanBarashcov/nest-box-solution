import { User } from '../../../infrastructure/postgres/models/User';
import { RegistrationDto } from '../dtos/registration.dto';

export interface IUserRegistrationService {
  executeRegistration(registrationDto: RegistrationDto): Promise<User>;
}
