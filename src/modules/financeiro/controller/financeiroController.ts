import { Request, Response } from "express";
import { financeiroService } from "../service/financeiroService";

export const financeiro: financeiroService = new financeiroService();
export class financeiroController {
  async criarTiposPagamentos(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await financeiro.criarTiposPagamentos(body);

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async listarTiposPagamentos(req: Request, res: Response) {
    try {
      const result = await financeiro.listarTiposPagamentos();
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async editarTiposPagamentos(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await financeiro.editarTiposPagamentos(body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async deletarTipoPagamento(req: Request, res: Response) {
    try {
      const cd_pagamento = req.body;
      const result = await financeiro.editarTiposPagamentos(cd_pagamento);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async efetuarPagamentoServico(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await financeiro.efetuarPagamentoServico(body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
}
