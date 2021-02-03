import * as path from 'path';
import {
  DockerComposeEnvironment,
  GenericContainer,
  Wait,
} from 'testcontainers';
import { exec } from 'child_process';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import * as request from 'supertest';
import { UserService } from '../user/services/user.service';
import { UserController } from '../user/controllers/user.controller';
import { UserRepository } from '../user/repositories/user.repository';

describe('DockerComposeEnvironment', () => {

  const beforeAll = async () => {
    let environment;
    let pgContainer;

    const postgresTestContainer = await new GenericContainer(`postgres`)
      .withExposedPorts(5432)
      .withEnv(`POSTGRES_USER`, `postgres`)
      .withEnv(`POSTGRES_PASSWORD`, `postgres`)
      .withEnv(`POSTGRES_DB`, `test-box-db`)
      .start();

    const networkName = postgresTestContainer.getNetworkNames()[0];
    process.env.DB_HOST = postgresTestContainer.getIpAddress(networkName);
    process.env.DB_PORT = postgresTestContainer.getMappedPort(5432).toString();
    process.env.DB_USERNAME = `postgres`;
    process.env.DB_PASSWORD = `postgres`;
    process.env.DB_DATABASE = 'test-box-db';

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [UserController],
      providers: [UserRepository, UserService],
    }).compile();

    const app = moduleFixture.createNestApplication();
    const appp = await app.init();

    const { stdout, stderr } = exec(
      `npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
`,
      {
        env: {
          DB_HOST: process.env.DB_HOST,
          DB_PORT: process.env.DB_PORT,
          DB_USERNAME: process.env.DB_USERNAME,
          DB_PASSWORD: process.env.DB_PASSWORD,
          DB_DATABASE: process.env.DB_DATABASE,
        },
      },
    );
    if (stderr) {
      console.log(`error: ${stderr}`);
    }
    console.log(`Number of files ${stdout}`);

    return app;
  };

  it('works', async () => {
    const app = await beforeAll();
    return await request(app.getHttpServer())
      .get('/user/find/all')
      .expect(200)
      .expect('Hello World!');
  });
});
