import { NextFunction, Request, Response } from 'express';

import { ApiResponse } from '../interfaces/response.interface';
import { CrudService } from './crud.service';
import { Model } from 'sequelize';

export class CrudController<M extends Model> {
  constructor(
    readonly service: CrudService<M>,
    readonly serviceName: string
  ) {}

  public all = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.service.all();
      const apiResponse: ApiResponse<M[]> = {
        statusCode: 200,
        statusMessage: 'Success',
        data: result,
      };
      res.status(200).json(apiResponse);
    } catch (error) {
      next(error);
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.service.create(req.body);
      const apiResponse: ApiResponse<M> = {
        statusCode: 200,
        statusMessage: 'Success',
        data: result,
      };
      res.status(200).json(apiResponse);
    } catch (error) {
      next(error);
    }
  };

  public remove = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.service.remove(id);
      const apiResponse: ApiResponse<any> = {
        statusCode: 200,
        statusMessage: 'Success',
        data: result,
      };
      res.status(200).json(apiResponse);
    } catch (error) {
      next(error);
    }
  };
  public update = async (
    req: Request<{id: number}>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id: number = req.params.id;
      const result = await this.service.update(id, req.body);
      const apiResponse: ApiResponse<M> = {
        statusCode: 200,
        statusMessage: 'Success',
        data: result,
      };
      res.status(200).json(apiResponse);
    } catch (error) {
      next(error);
    }
  };
}
