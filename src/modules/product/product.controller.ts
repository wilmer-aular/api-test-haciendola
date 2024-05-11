import { CrudController } from '../../database/crud.controller';
import { IProduct } from './product.model';
import { productService } from './product.service';

class ProductController extends CrudController<IProduct> {

  constructor() {
    super(productService, 'product-controller');
  }

 
}

export const productController = new ProductController();
