import { comparePassword, passwordEncript } from './auth.util';

import { BodyToken } from "../../middleware/apiToken.middleware";
import { User } from './user.model';
import { env } from '../../configurations/index';
import jwt from 'jsonwebtoken';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface IRegister extends LoginRequest {
  confirmPassword: string,
  fullName: string,
}

export interface LoginResponse extends BodyToken {
  accessToken: string;
  refreshToken: string;
}

const generateToken = (bodyToken: BodyToken, tokenType: string) => {
  return jwt.sign(bodyToken, tokenType, { expiresIn: '24h' });
};

class AuthService {


  public login = async (body: LoginRequest): Promise<LoginResponse> => {

    const { email, password } = body;
    const user = await User.findOne({ raw: true, where: { email } });

    if (!user) throw new Error('El usuario no existe.');

    const comparePwd = await comparePassword(user.password, password);
      
    if (!comparePwd) throw new Error('Contraseña invalida.');

    const bodyToken: BodyToken = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      date: new Date()
    };

    const accessToken: string = generateToken(bodyToken, env.accessToken);
    const refreshToken: string = generateToken(bodyToken, env.refreshToken);

    return {...bodyToken, accessToken, refreshToken };
  };

  public signUp = async (body: IRegister): Promise<any> => {

    if(body.password !== body.confirmPassword){
      throw new Error('Las contraseñas no coinciden');
    }

    const user = {
      email: body.email,
      password: await passwordEncript(body.password),
      fullName: body.fullName
    };
    await User.create(user);
    return { success: true };
  };
}

export const authService = new AuthService();
