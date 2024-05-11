/* eslint @typescript-eslint/no-var-requires: "off" */
import { Dialect, Sequelize } from 'sequelize';
require('dotenv').config();

const db = {
  dialect: `${process.env.DB_DIALECT}`,
  database: `${process.env.DB_DATABASE}`,
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  host: `${process.env.DB_HOST}`,
  port: Number(process.env.DB_PORT),
};

const dbDriver: Dialect = db.dialect as Dialect;
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: dbDriver,
  logging: () => {
    //Log dummy in database
  },
});

sequelize.authenticate();

export { sequelize };
