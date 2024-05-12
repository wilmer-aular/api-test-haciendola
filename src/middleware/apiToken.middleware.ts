import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions';
import { env } from '../configurations/index';
import jwt from 'jsonwebtoken';

export interface BodyToken {
  id: number;
  email?: string;
  fullName: string;
  date: Date;
}

const getDataByToken = async (token: string): Promise<BodyToken> => {
  return new Promise((success, reject) => {
    jwt.verify(token, env.accessToken, (err, decoded: any) => {
      if (err) reject(err);
      const { id, email, fullName, date } = decoded;
      const user: BodyToken = { id, email, fullName, date };

      success(user);
    });
  });
};

const apiTokenValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers['authorization'];
  const apiKey: string = <string>req.headers['x-api-key'];
  try {
    if (!authHeader && !apiKey) {
      throw new HttpException('Header not exist.', 401);
    }
    if (authHeader) {
      const [type, token] = authHeader.split(' ');
      
      if (type !== 'Bearer') {
        throw new HttpException('Header type invalid', 401);
      }
      if (!token) {
        throw new HttpException('Invalid token', 401);
      }
    } else {
      throw new HttpException('Header type invalid', 401);
    }
    next();
  } catch (error: any) {
    res.status(403);
    res.json({ error: true, status: 403, message: error.message });
  }
};

export { apiTokenValidation };
