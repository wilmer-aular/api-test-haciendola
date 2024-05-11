import { CrudController } from './crud.controller';
import { Model } from 'sequelize';
import { Route } from '../interfaces/route.interface';
import { Router } from 'express';

export abstract class CrudRouter<M extends Model> implements Route {
  public router = Router();
  constructor(
    readonly basePath: string,
    readonly controller: CrudController<M>
  ) {}

  protected initRoutes = (middleware: any[] = []) => {
    this.router.get('/', middleware, this.controller.all);
    this.router.post('/', middleware, this.controller.create);
    this.router.put('/:id', middleware, this.controller.update);
    this.router.delete('/:id', middleware, this.controller.remove);
  };
}
