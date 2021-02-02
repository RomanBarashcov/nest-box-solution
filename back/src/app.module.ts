import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from '../infrastructure/postgres/models/User';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'nest-box-solution',
      synchronize: false,
      models: [User],
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
