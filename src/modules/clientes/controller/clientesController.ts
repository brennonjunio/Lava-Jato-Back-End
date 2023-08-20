import { Request, Response } from "express";
import { criarClienteDTO } from "../dto/clientesDTO";
import { ClienteService } from "../service/clienteService";
import { result } from "lodash";

export const clientesrv = new ClienteService();

export class ClienteController {
  async criarCliente(req: Request, res: Response) {
    try {
      const body = req.body as criarClienteDTO;
      const result = await clientesrv.salvar(body);

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listar(req: Request, res: Response) {
    try {
      const result = await clientesrv.listar();

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async atualizar(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await clientesrv.atualizar(body);

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async deletar(req: Request, res: Response) {
    try {
      const { cd_cliente } = req.body;
      await clientesrv.deletar(cd_cliente);
      return res.status(200).json({ message: "Sucesso ao deletar Cadastro!" });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async inativar(req: Request, res: Response) {
    try {
      const { cd_cliente } = req.body;
      await clientesrv.inativar(cd_cliente);
      return res.status(200).json({ data: cd_cliente });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
