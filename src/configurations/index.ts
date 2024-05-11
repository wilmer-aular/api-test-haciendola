/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();

export * from './database';

export const app = {
  port: Number(process.env.PORT),
};

export const env = {
  accessToken: process.env.ACCESS_TOKEN ?? 'secretKeyHaciendola',
  refreshToken: process.env.REFRESH_SECRET_TOKEN ?? 'refreshSecretKeyHaciendola',
  appUrl: process.env.APP_URL_BASE,
};