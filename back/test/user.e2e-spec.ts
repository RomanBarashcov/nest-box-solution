import path from 'path';
import { DockerComposeEnvironment } from 'testcontainers';

describe('DockerComposeEnvironment', () => {
  let environment;
  let pgContainer;

  beforeAll(async () => {
    const composeFilePath = path.resolve(__dirname, '/deploy/test');
    const composeFile = 'docker-compose.yml';

    environment = await new DockerComposeEnvironment(
      composeFilePath,
      composeFile,
    ).up();

    pgContainer = environment.getContainer('nest-db-test');

    const mappedPort = pgContainer.getMappedPort(5432);
    const host = pgContainer.getHost();
  });

  afterAll(async () => {
    await pgContainer.quit();
    await environment.down();
  });

  it('works', async () => {
    await pgContainer.set('key', 'val');
    expect(await pgContainer.get('key')).toBe('val');
  });
});
