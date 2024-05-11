import { CrudRouter } from '../../database/crud.router';
import { IProduct } from './product.model';
import { apiTokenValidation } from '../../middleware/apiToken.middleware';
import { productController } from './product.controller';

class ProductRouter extends CrudRouter<IProduct> {

  constructor() {
    super('/products', productController);
    this.router.use(apiTokenValidation);
    this.prepareRouters();
    this.initRoutes([]);
  }

  private prepareRouters = (): void => {
    //,as Rutas
  };

}

export const productRouter = new ProductRouter();
