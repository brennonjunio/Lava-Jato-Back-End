import { Request, Response } from "express";
import { financeiroService } from "../service/financeiroService";
import { adicionarMovimentacao } from "../dto/movimentacaoFinanceiraDTO";

export const financeiro: financeiroService = new financeiroService();
export class financeiroController {
  async criarTiposPagamentos(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await financeiro.criarTiposPagamentos(body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarTiposPagamentos(req: Request, res: Response) {
    try {
      const result = await financeiro.listarTiposPagamentos();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async editarTiposPagamentos(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await financeiro.editarTiposPagamentos(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async deletarTipoPagamento(req: Request, res: Response) {
    try {
      const cd_pagamento = req.params.cd_pagamento;
      const result = await financeiro.deletarTipoPagamento(
        Number(cd_pagamento)
      );
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async efetuarPagamentoAtendimento(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await financeiro.efetuarPagamentoAtendimento(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarTransacoesFinanceiro(req: Request, res: Response) {
    try {
      const result = await financeiro.listarTransacoesFinanceiro();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarMovimentacoesFinanceiro(req: Request, res: Response) {
    try {
      const result = await financeiro.listarMovimentacoesFinanceiro();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async adicionarMovimentacao(req: Request, res: Response) {
    try {
      const body = req.body as adicionarMovimentacao;
      const result = await financeiro.adicionarMovimentacao(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
