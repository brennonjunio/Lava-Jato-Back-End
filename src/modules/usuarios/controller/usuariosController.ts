import { Request, Response } from "express";
import { UsuariosService } from "../service/usuariosService";
import { CriarUsuarioDTO, EditarUsuarioDTO } from "../dto/usuariosDTO";
export const usuarioSrv = new UsuariosService();

export class UsuariosController {
  async criarUsuario(req: Request, res: Response) {
    try {
      const body = req.body as CriarUsuarioDTO;
      const result = await usuarioSrv.criarUsuarios(body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async editarUsuario(req: Request, res: Response) {
    try {
      const body = req.body as EditarUsuarioDTO;
      const { cd_usuario } = req.params;

      const result = await usuarioSrv.editarUsuario(Number(cd_usuario), body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listarUsuariosAll(req: Request, res: Response) {
    try {
      const result = await usuarioSrv.listarUsuariosAll();
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
