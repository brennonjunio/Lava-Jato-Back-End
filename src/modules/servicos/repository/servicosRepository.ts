import { isEmpty, result } from "lodash";
import db from "../../../database/database";
import {
  criarServicoDTO,
  updateServiceDTO,
  vinculoVeiculoServico,
  vinculoVeiculoServicoEditar,
} from "../dto/servicosDTO";
import { UseCaseService } from "./useCase/useCaseService";

export class servicosRepository {
  private case: UseCaseService = new UseCaseService();
  async criarServico(param: criarServicoDTO) {
    const result = await db.servicos.create({
      data: param,
    });
    return result;
  }
  async listarServicos() {
    const result = await db.servicos.findMany({orderBy:{cd_servico:'desc'}});
    return result;
  }
  async listarServicosPorVeiculo(cd_veiculo: number) {
    const result = await db.$queryRawUnsafe(
      `select b.cd_servico,
        buscar_nome_servico(b.cd_servico)descricao,
        buscar_valor_servico(b.cd_servico)valor 
          from veiculos_clientes a join veiculos_servico b 
            on a.cd_tipo_veiculo = b.cd_tipo_veiculo where cd_veiculo = ?`,
      cd_veiculo
    );
    return result;
  }
  async editarServicos(params: updateServiceDTO) {
    const result = await db.servicos.update({
      where: { cd_servico: params.cd_servico },
      data: params,
    });
    return result;
  }
  async deletarServicos(cd_servico: number) {
    const result = await db.servicos.delete({
      where: { cd_servico: cd_servico },
    });
    return result;
  }

  async criarVeiculoServico(p: vinculoVeiculoServico) {
      for (const service of p.cd_servico) {
        console.log("🚀 ~ file: servicosRepository.ts:50 ~ servicosRepository ~ criarVeiculoServico ~ service:", service)
        
        await db.$queryRawUnsafe(
          `insert into veiculos_servico (cd_servico,cd_tipo_veiculo) values (?,?)`,
          service,
          p.cd_tipo_veiculo
        );

      }
   
  }
  // async editarVeiculoServico(params: vinculoVeiculoServicoEditar) {
  //   const result = await db.veiculos_servico.updateMany({
  //     where: { nr_sequencia: params.sequencia },
  //     data: {
  //       cd_servico: params.cd_servico,
  //       // cd_tipo_veiculo: params.cd_tipo_veiculo,
  //     },
  //   });
  //   return result;
  // }
}
