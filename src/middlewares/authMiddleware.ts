import { AuthService } from '../modules/auth/Service/authService';
import { NextFunction, Request, Response } from 'express';


export class AuthMiddleware {
    static varify(req: Request, res: Response, next: NextFunction) {
        const excludedRoutes = ['/usuario']; 

        if (excludedRoutes.includes(req.path)) {
          return next();
        }
        const result = new AuthService().validaToken(
            req.headers['authorization'],
        );
        console.error(result.err);
        if (!result.isValidToken) {
            return res.status(401).json({ status: false, message: 'Token Invalido Ou não encontrado'});
        }

        next();
    }
}