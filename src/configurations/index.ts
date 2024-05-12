/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();

export * from './database';

//La idea es configurar el env, para no exponer las credenciales

export const app = {
  port: process.env.PORT ? Number(process.env.PORT) : 3002,
};

export const db = {
  dialect: process.env.DB_DIALECT ?? 'mysql',
  database: process.env.DB_DATABASE ?? 'haciendola',
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
};

export const env = {
  accessToken: process.env.ACCESS_TOKEN ?? 'secretKeyHaciendola',
  refreshToken: process.env.REFRESH_SECRET_TOKEN ?? 'refreshSecretKeyHaciendola',
  appUrl: process.env.APP_URL_BASE,
};