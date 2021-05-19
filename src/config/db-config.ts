import { Transaction } from 'sequelize';
import type { SequelizeOptions } from 'sequelize-typescript';
import parseDbUrl from 'parse-database-url';

import env from './env-config';

export type DBEnvironment = 'development' | 'test' | 'production';

export type SequelizeOptionEnvironments = {
  [key in DBEnvironment]: SequelizeOptions
};

const dbConfig = parseDbUrl(env.db.db_url);

// const dbOptions: SequelizeOptionEnvironments = {
//   development: {
//     username: env.db.user,
//     password: env.db.password,
//     database: env.db.name,
//     host: env.db.host,
//     port: env.db.port,
//     dialect: 'postgres',
//     isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
//     logging: false
//   },
//   test: {
//     username: env.db.user,
//     password: env.db.password,
//     database: env.db.name,
//     host: env.db.host,
//     port: env.db.port,
//     dialect: 'postgres',
//     isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
//     logging: false
//   },
//   production: {
//     username: env.db.user,
//     password: env.db.password,
//     database: env.db.name,
//     host: env.db.host,
//     port: env.db.port,
//     dialect: 'postgres',
//     isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   },
// };

const dbOptions: SequelizeOptionEnvironments = {
  development: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    logging: false,
  },
  test: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    logging: false,
  },
  production: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

export default dbOptions;
