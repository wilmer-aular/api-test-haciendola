import { IProduct, Product } from './product.model';

import { CrudService } from '../../database/crud.service';

class ProductService extends CrudService<IProduct>{

  constructor() {
    super(Product, 'prduct-service');
  }
}

export const productService = new ProductService();
