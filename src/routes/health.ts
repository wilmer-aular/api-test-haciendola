import { Request, Response, Router } from 'express';

import { productService } from '../modules/product/product.service'
const router = Router();

router.get('/health', (req: Request, res: Response) => {
  productService.uploadProducts();
  res.status(200).json({
    connected: true,
    status: 'Success',
  });
});

export default router;