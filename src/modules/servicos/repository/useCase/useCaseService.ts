import db from "../../../../database/database";
import { vinculoVeiculoServico } from "../../dto/servicosDTO";

export class UseCaseService {
  async validaServicoUsado(params: number) {
    return await db.servicos_atendimento.findFirst({
      where: { cd_servico: params },
      select: { cd_servico: true },
    });
  }
  async validaTipoVeiculoServico(params:vinculoVeiculoServico) {
    const validations = [] as any;
  
    for await (let i of params.cd_servico) {
      const validate = await db.$queryRawUnsafe(
        "select a.cd_tipo_veiculo, buscar_tipo_veiculo(a.cd_tipo_veiculo) as tipo from veiculos_servico a where cd_tipo_veiculo = ? and cd_servico = ?;",
        params.cd_tipo_veiculo,
        i
      );
  
    await validations.push(validate);
    }

  if(validations.length == params.cd_servico.length){
    return 'Todos já foram vinculados'
  }
    return validations;
  }
}
