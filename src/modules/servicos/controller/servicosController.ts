import { Request, Response } from "express";
import { servicosService } from "../service/servicosService";
import {
  FiltroListagem,
  criarServicoDTO,
  updateServiceDTO,
  vinculoVeiculoServico,
  vinculoVeiculoServicoEditar,
} from "../dto/servicosDTO";
import { isEmpty } from "lodash";
import AppStatus from "../../../shared/AppStatus";

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
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarServicosPorCliente(req: Request, res: Response) {
    try {
      const { cd_veiculo } = req.params;
      const result = await servicos.listarServicosPorVeiculo(
        Number(cd_veiculo)
      );
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }

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
      const { cd_servico } = req.params;
      const result = await servicos.deletarServicos(Number(cd_servico));

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async criarVeiculoServico(req: Request, res: Response) {
    try {
      const params = req.body as vinculoVeiculoServico;
      const result = await servicos.criarVeiculoServico(params);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  async listarVeiculoServico(req: Request, res: Response) {
    try {
      const params = req.query 
      const result = await servicos.listarVeiculoServico(params);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }

}
