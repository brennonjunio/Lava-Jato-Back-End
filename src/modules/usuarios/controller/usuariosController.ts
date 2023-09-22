import { Request, Response } from "express";
import { UsuariosService } from "../service/usuariosService";
export const usuarioSrv = new UsuariosService();

export class UsuariosController {
  async criarUsuario(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await usuarioSrv.criarUsuarios(body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
