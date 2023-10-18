import { AuthService } from "../modules/auth/Service/authService";
import { NextFunction, Request, Response } from "express";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = new AuthService().validaToken(req.headers.authorization);

  if (!result.isValidToken) {
    return res
      .status(401)
      .json({
        status: false,
        message: "Token não foi encontrado ou é invalido",
      });
  }

  next();
};
