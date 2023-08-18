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
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async listarServicos(req: Request, res: Response) {
    try {
      const result = await servicos.listarServicos();
      return res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async editarServicos(req: Request, res: Response) {
    try {
      const body = req.body as updateServiceDTO;
      const result = await servicos.editarServicos(body);
      return res.status(201).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async deletarServicos(req: Request, res: Response) {
    try {
      const {cd_servico} = req.body;
      const result = await servicos.deletarServicos(cd_servico);
      return res.status(201).json({ data: result });
    } catch (error) {
      res.status(500).json({
        data: { error },
      });
    }
  }
  async agendarServico(req: Request, res: Response){
  try {
    const body = req.body 
    const result = await servicos.agendarServico(body);

    return res.status(200).json({ data: result.message});
  } catch (error) {
    res.status(500).json({
      data: { error },
    });
  }

  }
}
