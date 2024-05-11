import { Model } from 'sequelize';

export interface IModelBase extends Model {
  id: number;
  createdAt: Date;
  updateAt: Date;
}

const configDatabase = {
  underscored: true,
};

export { configDatabase };
