import { isEmpty } from "lodash";
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
    const result = await db.servicos.findMany({});
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

  async criarVeiculoServico(params: vinculoVeiculoServico) {
    const result = await db.veiculos_servico.create({
      data: params,
    });
    return result;
  }
  async editarVeiculoServico(params: vinculoVeiculoServicoEditar) {
    const result = await db.veiculos_servico.updateMany({
      where: { nr_sequencia: params.sequencia },
      data: {
        cd_servico: params.cd_servico,
        cd_tipo_veiculo: params.cd_tipo_veiculo,
      },
    });
    return result;
  }
}
