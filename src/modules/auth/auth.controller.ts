import { LoginRequest, authService } from './auth.service';
import { NextFunction, Request, Response } from 'express';

class AuthController {
  public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dataLogin: LoginRequest = req.body;
      const result = await authService.login(dataLogin);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await authService.signUp(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
}

export const authController = new AuthController();
