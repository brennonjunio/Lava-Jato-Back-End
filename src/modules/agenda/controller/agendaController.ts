import { Request, Response } from "express";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";
import { agendaService } from "../service/agendaService";

export const service = new agendaService();
export class agendaController {
  async criarAgenda(req: Request, res: Response) {
    try {
      const body = req.body as criarAgendaDTO;
      const result = await service.criarAgenda(body);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async listarAgendasDisponiveis(req: Request, res: Response) {
    try {
      const result = await service.listarAgendasDisponiveis();
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async deletarHorarioAgenda(req: Request, res: Response) {
    try {
      const { cd_agenda } = req.params;
      const result = await service.deletarHorarioAgenda(Number(cd_agenda));
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
}
