import { Router } from 'express';
import { authRouter } from '../modules/auth/auth.router';
import { productRouter } from '../modules/product/product.router';

const routes = [ productRouter, authRouter];
const router = Router();

routes.forEach((route) => router.use(route.basePath, route.router));

export default router;
