import { Request, Response } from "express";
import { servicosService } from "../service/servicosService";

export const servicos = new servicosService();

export class servicosController {
  async criarServico(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await servicos.criarServico(body);
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listarServicos(req: Request, res: Response) {
    try {
      const result = await servicos.listarServicos();
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
