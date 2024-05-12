/* eslint @typescript-eslint/no-var-requires: "off" */
import { Dialect, Sequelize } from 'sequelize';

import { db } from './index'

require('dotenv').config();

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
