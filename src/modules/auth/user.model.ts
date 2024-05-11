import { DataTypes, ModelStatic } from 'sequelize';
import { IModelBase, configDatabase } from '../../database/base.model';

import { sequelize } from '../../configurations/database';

export interface IUser extends IModelBase {
  fullName: string;
  email: string;
  password: string;
}

const model = {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

const User: ModelStatic<IUser> = sequelize.define<IUser>(
  'User',
  model,
  configDatabase
);

export { User };
