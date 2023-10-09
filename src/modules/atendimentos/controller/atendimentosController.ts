import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { Request, Response } from "express";
import { AtendimentosService } from "../services/atendimentosServices";
import { FinalizarServico } from "../DTO/atendimentosDTO";
export const servicos = new AtendimentosService();

export class AtendimentosController{
    async agendarServico(req: Request, res: Response) {
        try {
          const body = req.body as criarAgendamentoServicoDTO;
          const result = await servicos.agendarServico(body);
          return res.status(result.statusCode).json( result );
        } catch (error) {
          res.status(500).json({
            error,
          });
        }
      }
      async listarServicosAtendimentos(req: Request, res: Response) {
        try {
          const result = await servicos.listarServicosAtendimentos();
    
          return res.status(result.statusCode).json(result);
        } catch (error) {
          res.status(500).json({
            error,
          });
        }
      }
      async listarServicosAtendimentosPorCliente(req: Request, res: Response) {
        try {
         const  {cd_cliente} = req.params
          const result = await servicos.listarServicosAtendimentosPorCliente(Number(cd_cliente));
    
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
      async finalizarAtendimento(req: Request, res: Response) {
        try {
          const nr_atendimento_p = req.params;
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
}