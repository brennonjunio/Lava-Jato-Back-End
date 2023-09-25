import { Request, Response } from "express";
import { AuthDTO } from "../DTO/authDTO";
import { AuthService } from "../Service/authService";

export const auth = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const body = req.body as AuthDTO;
      const result = await auth.login(body);
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
