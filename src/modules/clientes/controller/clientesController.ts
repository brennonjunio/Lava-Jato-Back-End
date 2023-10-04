import { Request, Response } from "express";
import { ClienteService } from "../service/clienteService";
export const clientesrv = new ClienteService();
export class ClienteController {
  async criarCliente(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await clientesrv.salvar(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listar(req: Request, res: Response) {
    try {
      const result = await clientesrv.listar();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async atualizar(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await clientesrv.atualizar(body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async deletar(req: Request, res: Response) {
    try {
      const { cd_cliente } = req.params;
      const result = await clientesrv.deletar(Number(cd_cliente));
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }

}
