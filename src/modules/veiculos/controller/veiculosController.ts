import db from "../../../database/database";
import { veiculoService } from "../service/veiculosService";
import { Request, Response } from "express";
export const service = new veiculoService();
export class veiculosController {
  async criarTipoVeiculo(req: Request, res: Response) {
    try {
      const descricao = req.body;
      const result = await service.criarTipoVeiculo(descricao);

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async listarTipoVeiculo(req: Request, res: Response) {
    try {
      const result = await service.listarTipoVeiculo();
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async editarTipoVeiculo(req: Request, res: Response) {
    try {
      const { cd_tipo_veiculo, descricao } = req.body;
      const result = await service.editarTipoVeiculo(
        cd_tipo_veiculo,
        descricao
      );
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async deletarTipoVeiculo(req: Request, res: Response) {
    try {
      const { cd_tipo_veiculo } = req.body;
      const result = await service.deletarTipoVeiculo(cd_tipo_veiculo);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async veiculoClienteCriar(req: Request, res: Response) {
    try {
      const body = req.body;

      const result = await service.criarVeiculoCLiente(body);

      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async listarVeiculosCliente(req: Request, res: Response) {
    try {
      const result = await service.listarVeiculosCliente();
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async editarVeiculosCliente(req: Request, res: Response) {
    try {
      const body = req.body;
      const result = await service.atualizarVeiculosCliente(body);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
  async deletarVeiculosCliente(req: Request, res: Response) {
    try {
      const { cd_veiculo } = req.body;
      const result = await service.deletarVeiculosCliente(cd_veiculo);
      return res.status(result.statusCode).json({ data: result });
    } catch (error) {
      res.status(500).json({
        error
      });
    }
  }
}
