export interface IConfig {
  host: string;
  port: number;
}

export default () => {
  const config: IConfig = {
    host: process.env.APPLICATION_HOST || 'localhost',
    port: parseInt(process.env.APPLICATION_PORT, 10) || 3000,
  };
  return config;
};
