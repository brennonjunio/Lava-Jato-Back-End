import db from "../../../../database/database";
import { vinculoVeiculoServico } from "../../dto/servicosDTO";

export class UseCaseService {
  async validaServicoUsado(params: number) {
    return await db.servicos_atendimento.findFirst({
      where: { cd_servico: params },
      select: { cd_servico: true },
    });
  }
  async validaTipoVeiculoServico(params: vinculoVeiculoServico) {
    const result = await db.$queryRawUnsafe(
      "select * from veiculos_servico where cd_tipo_veiculo = ? and cd_servico =?",
      params.cd_tipo_veiculo,
      params.cd_servico
    );
    return result;
  }
}
