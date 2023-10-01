import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { Request, Response } from "express";
import { AtendimentosService } from "../services/atendimentosServices";
export const servicos = new AtendimentosService();

export class AtendimentosController{
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
          const { nr_servico_p,nr_atendimento_p } = req.body;
          const result = await servicos.finalizarServico(nr_servico_p,nr_atendimento_p);
          return res.status(result.statusCode).json(result);
        } catch (error) {
          res.status(500).json({
            error,
          });
        }
      }
    
      async listarAtendimentosFinalizados(req: Request, res: Response) {
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