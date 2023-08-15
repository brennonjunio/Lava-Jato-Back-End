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
        status: true,
        data: { message: `Erro ao Cadastrar Agenda: `, error },
      });
    }
  }
  async listarAgendasDisponiveis(req: Request, res: Response) {
    try {
      console.log(Date())
      const result = await service.listarAgendasDisponiveis();
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        status: true,

        data: { message: `Erro ao Cadastrar Agenda: `, error },
      });
    }
  }
}
