import { DataTypes, QueryInterface } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      handle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      sku: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      grams: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      stock: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      compare_price: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      barcode: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
  });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.dropTable('products');
}