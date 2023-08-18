import { Request, Response } from "express";
import { financeiroService } from "../service/financeiroService";

export const financeiro: financeiroService = new financeiroService();
export class financeiroController {
  async criarTiposPagamentos(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await financeiro.criarTiposPagamentos(body);

      return res.status(200).json({ data: result });

    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listarTiposPagamentos(req: Request, res: Response) {
    try {
      const result = await financeiro.listarTiposPagamentos();
      return res.status(200).json({ data: result });
      
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
