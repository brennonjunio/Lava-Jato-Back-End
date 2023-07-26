import { veiculoService } from "../service/veiculosService";
import { Request, Response } from "express";
export const service = new veiculoService();
export class veiculosController {
  async criarTipoVeiculo(req: Request, res: Response) {
    try {
      const descricao = req.body;
      await service.criarTipoVeiculo(descricao);

      return res
        .status(200)
        .json({ message: "Tipo de veiculo Criado Com sucesso" });
    } catch (error) {
      return { message: error };
    }
  }
  async listarTipoveiculo(req: Request, res: Response) {
    try {
      const listar = await service.listarTipoVeiculo();
      return res.status(200).json(listar);
    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: `Erro ao Inativar cadastro: ${error}` },
      });
    }
  }
}
