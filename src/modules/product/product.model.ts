import { DataTypes, ModelStatic } from 'sequelize';
import { IModelBase, configDatabase } from '../../database/base.model';

import { sequelize } from '../../configurations/database';

export interface IProduct extends IModelBase {
  title: string;
  handle: string;
  description: string;
  sku: number,
  grams: number;
  stock: number;
  price: number;
  comparePrice: number;
  barcode: number;
}

const model = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  handle:  {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:  {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sku: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  grams: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }, 
  stock: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  comparePrice: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  barcode: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
};

const Product: ModelStatic<IProduct> = sequelize.define<IProduct>(
  'Product',
  model,
  configDatabase
);

export { Product };
