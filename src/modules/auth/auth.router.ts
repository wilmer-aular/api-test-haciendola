import { Route } from '../../interfaces/route.interface';
import { Router } from 'express';
import { apiTokenValidation } from '../../middleware';
import { authController } from './auth.controller';

class AuthRouter implements Route {
  basePath = '/auth';
  router = Router();
  constructor() {
    this.prepareRouters();
  }
  private prepareRouters = () => {
    this.router.post('/login', authController.login);
    this.router.post('/register', authController.signUp);
  };
}

export const authRouter = new AuthRouter();
