import db from "../../../database/database";
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
  async listarTipoVeiculo(req: Request, res: Response) {
    try {
      const listar = await service.listarTipoVeiculo();
      return res.status(200).json(listar);
    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: `Erro Ao Listar Tipos de Veiculos: ${error}` },
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
      return res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: "Erro Ao Atualizar Tipo Veiculo:", error },
      });
    }
  }
  async deletarTipoVeiculo(req: Request, res: Response) {
    try {
      const { cd_tipo_veiculo } = req.body;
      const result = await service.deletarTipoVeiculo(cd_tipo_veiculo);
      return res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: "Erro ao Deletar Tipo Veiculo:", error },
      });
    }
  }
  async veiculoClienteCriar(req: Request, res: Response) {
    try {
      const body = req.body;
      const uniquePlaca = await db.veiculos_clientes.findFirst({
        where: { placa: body.placa }
      });
      if(uniquePlaca){
        throw new Error(`Veiculo Já Cadastrado`);
      }

      const result = await service.criarVeiculoCLiente(body);


      return res.status(200).json({ data: result });

    } catch (error) {
      return res.status(500).json(String(`${error}`));
    }
  }
  async listarVeiculosCliente(req: Request, res: Response) {
    try {
      const result = await service.listarVeiculosCliente();
      return res.status(200).json({ data: result });

    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: "Erro Ao listar Veiculos", error },
      });
    }
  }
  async editarVeiculosCliente(req: Request, res: Response){
    try {
      const body = req.body
      const result = await service.atualizarVeiculosCliente(body)
      return res.status(201).json({ data: result });

    } catch (error) {
      res.status(500).json({
        status: true,
        data: { message: "Erro Ao Atualizar Veiculo do Cliente", error },
      });
    }
  }
  async deletarVeiculosCliente(req: Request, res: Response){
try {
  const {cd_veiculo} = req.body;
  const result = await service.deletarVeiculosCliente(cd_veiculo);
  return res.status(200).json({ data: result });

} catch (error) {
  res.status(500).json({
    status: true,
    data: { message: "Erro Ao Deletar Veiculo do Cliente", error },
  });
}

  }
  
}
