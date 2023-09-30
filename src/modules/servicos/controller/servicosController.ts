import { Request, Response } from "express";
import { servicosService } from "../service/servicosService";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { criarAgendamentoServicoDTO } from "../dto/agendamentoServicosDTO";

export const servicos = new servicosService();

export class servicosController {
  async criarServico(req: Request, res: Response) {
    try {
      const body = req.body as criarServicoDTO;
      const result = await servicos.criarServico(body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarServicos(req: Request, res: Response) {
    try {
      const result = await servicos.listarServicos();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async editarServicos(req: Request, res: Response) {
    try {
      const body = req.body as updateServiceDTO;
      const result = await servicos.editarServicos(body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async deletarServicos(req: Request, res: Response) {
    try {
      const { cd_servico } = req.body;
      const result = await servicos.deletarServicos(cd_servico);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async agendarServico(req: Request, res: Response) {
    try {
      const body = req.body as criarAgendamentoServicoDTO;
      const result = await servicos.agendarServico(body);
      const { message } = result;
      return res.status(result.statusCode).json({ message });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarServicosAgendados(req: Request, res: Response) {
    try {
      const result = await servicos.listarServicosAgendados();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async finalizarServico(req: Request, res: Response) {
    try {
      const { nr_sequencia } = req.body;
      const result = await servicos.finalizarServico(nr_sequencia);
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
}
