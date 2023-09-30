import { Request, Response } from "express";
import { AuthDTO } from "../DTO/authDTO";
import { AuthService } from "../Service/authService";

export const auth = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const body = req.body as AuthDTO;
      const result = await auth.login(body);
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async loadSession(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (token === undefined) {
        throw ("Token de autorização não encontrado ou invalido");
      }
      const result = await auth.validaToken(token.trim());

      if (!result.isValidToken) {
        throw("Sua sessão é inválida ou está expirada");
      }

      return res.status(200).json({
        message:"Login Realizado Com Sucesso",
        token,
        user: result.data,
      });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
}
