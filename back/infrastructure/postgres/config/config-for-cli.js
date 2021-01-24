module.exports = {
  username: process.env.DATABASE_USER_NAME || `postgres`,
  password: process.env.DATABASE_PASSWORD || `postgres`,
  database: process.env.DATABASE_NAME || `nest-box-solution`,
  host: process.env.DATABASE_HOST || `localhost`,
  port: process.env.DATABASE_PORT || 5432,
  dialect: `postgres`,
  seederStorage: `sequelize`,
  seederStorageTableName: `SequelizeSeederMeta`,
};
