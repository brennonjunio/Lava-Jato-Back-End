import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { Request, Response } from "express";
import { AtendimentosService } from "../services/atendimentosServices";
export const servicos = new AtendimentosService();

export class AtendimentosController {
  async realizar_atendimento(req: Request, res: Response) {
    try {
      const body = req.body as criarAgendamentoServicoDTO;
      const result = await servicos.realizar_atendimento(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarAtendimentos(req: Request, res: Response) {
    try {
      const result = await servicos.listarAtendimentos();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarAtendimentosPorCliente(req: Request, res: Response) {
    try {
      const { cd_cliente } = req.params;
      const result = await servicos.listarAtendimentosPorCliente(
        Number(cd_cliente)
      );

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async finalizarServico(req: Request, res: Response) {
    try {
      const { nr_servico_p, nr_atendimento_p } = req.body;
      const result = await servicos.finalizarServico(
        nr_servico_p,
        nr_atendimento_p
      );
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }

  async listarServicosFinalizados(req: Request, res: Response) {
    try {
      const result = await servicos.listarServicosFinalizados();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarSericosEmAndamento(req: Request, res: Response) {
    try {
      const result = await servicos.listarSericosEmAndamento();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarSericosEmAndamentoAtend(req: Request, res: Response) {
    try {
      const { nr_atendimento } = req.params;
      const result = await servicos.listarSericosEmAndamentoAtendimento(
        Number(nr_atendimento)
      );
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async finalizarAtendimento(req: Request, res: Response) {
    try {
      const { nr_atendimento_p } = req.params;
      const result = await servicos.finalizarAtendimento(
        Number(nr_atendimento_p)
      );
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async cancelarAtendimento(req: Request, res: Response) {
    try {
      const { nr_atendimento, cd_usuario } = req.params;
      const result = await servicos.cancelarAtendimento(
        Number(nr_atendimento),
        Number(cd_usuario)
      );
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
