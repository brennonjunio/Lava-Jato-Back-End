import { Request, Response } from "express";
import { servicosService } from "../service/servicosService";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";

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

}
