import { Model, ModelStatic } from 'sequelize';

import { DatabaseException } from '../exceptions/database.exception';

export abstract class CrudService<T extends Model> {
  constructor(readonly model: ModelStatic<T>, readonly serviceName: string) { }

  public all = async (): Promise<T[]> => {
    try {
      return await this.model.findAll({raw: true, order: [['updated_at', 'DESC']] });
    } catch (error: any) {
      console.error(`${this.serviceName} - all`, error.message);
      throw new DatabaseException(error.message, this.serviceName);
    }
  };

  public create = async (data: any): Promise<T> => {
    try {
      return await this.model.create(data);
    } catch (error: any) {
      console.error(`${this.serviceName} - create`, error.message);
      throw new DatabaseException(error.message, this.serviceName);
    }
  };

  public remove = async (id: number): Promise<any> => {
    try {
      const data = await this.model.findByPk(id);
      return await data?.destroy();
    } catch (error: any) {
      console.error(`${this.serviceName} - remove`, error.message);
      throw new DatabaseException(error.message, this.serviceName);
    }
  };

  public update = async (id: number, newData: any): Promise<any> => {
    try {
      const data = await this.model.findByPk(id);
      data?.set(newData);
      await data?.save();
      return data;
    } catch (error: any) {
      console.error(`${this.serviceName} - update`, error.message);
      throw new DatabaseException(error.message, this.serviceName);
    }
  };
}
