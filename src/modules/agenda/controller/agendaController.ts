import { Request, Response } from "express";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";
import { agendaService } from "../service/agendaService";

export const service = new agendaService();
export class agendaController {
  async criarAgenda(req: Request, res: Response) {
    try {
      const body = req.body as criarAgendaDTO;
      const result = await service.agendarLavagem(body);
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listarAgendasDisponiveis(req: Request, res: Response) {
    try {
      const result = await service.listarAgendasDisponiveis();
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async deletarHorarioAgenda(req: Request, res: Response) {
    try {
      const { cd_agenda } = req.body;
      const result = await service.deletarHorarioAgenda(cd_agenda);
      return res.status(201).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
}
